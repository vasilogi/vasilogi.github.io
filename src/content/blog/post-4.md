---
title: Installing Ollama on Windows and Setting Up Open WebUI
excerpt: This guide explains how to install and self-host Generative AI models using Ollama and Open WebUI. Ollama provides a native CLI for managing AI models, while Open WebUI offers a user-friendly Docker-based interface with extended capabilities.
isFeatured: true
publishDate: 'January 11 2025'
tags:
  - Backend
  - LLM
  - AI
---


This article demonstrates how to install [Ollama](https://ollama.com/) and [Open WebUI](https://github.com/open-webui/open-webui) on your local machine to self-host and interact with Generative AI models.

For optimal performance, it's recommended to install Ollama natively on your machine. Download the installer from the official [website](https://ollama.com/) and follow the installation instructions. Once installed, launch Ollama and let it run in the background. Ollama provides a Command Line Interface (CLI) that enables you to manage compatible models, including pulling/pushing from a registry, viewing installed models, and creating new ones. You can view all available CLI commands by executing:

```bash
ollama help
```

To verify if Ollama is running properly, visit `http://127.0.0.1:11434` or execute:

```shell
curl http://localhost:11434/api/version
```

You can find Ollama-compatible models in their [library](https://ollama.com/search) . For example, to install `llama3`, run:

```bash
ollama pull llama3:8b
```

> Choose models based on your machine's specifications. I prefer using smaller models since my development environment has a graphics card that isn't compatible with Ollama (as of the current version).
> You can find a list of Ollama-compatible GPUs [here](https://github.com/ollama/ollama/blob/main/docs/gpu.md).

While you can interact directly with installed models using the CLI, [Open WebUI](https://github.com/open-webui/open-webui) offers a more user-friendly alternative with many more capabilities. Their [documentation](https://docs.openwebui.com/) provides detailed information on getting started. The recommended method is to run Open WebUI using Docker. The default Docker command is:

```shell
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

> [Server Connectivity Issues](https://docs.openwebui.com/troubleshooting/connection-error) are common with Open WebUI. In my case, port 3000 was already in use by another service, so I had to change it to 3030.
> [Server Connectivity Issues](https://docs.openwebui.com/troubleshooting/connection-error) are common with Open WebUI. In my case, port 3000 was already in use by another service, so I had to change it to 3030.
> Both Ollama and Open WebUI are rapidly evolving technologies. To avoid potential compatibility issues, it's recommended to use a specific version of Open WebUI rather than the latest one.
For easier solution maintenance, consider using `docker-compose`. The recommended Docker run command, mentioned above, can be converted to this docker-compose configuration:

```yaml
services:
  open-webui:
    image: ghcr.io/open-webui/open-webui:v0.4.8
    container_name: open-webui
    ports:
      - "3030:8080"
    extra_hosts:
      - "host.docker.internal:host-gateway"
    volumes:
      - open-webui:/app/backend/data
    restart: always
volumes:
  open-webui:
```

To start the container, simply run `docker compose up -d`. Ensure Ollama is running before launching the container.
