# Docker on CloudLinux

[[toc]]

## Introduction

A common question is: **Can Docker be installed with CloudLinux?**

**Docker can run inside CloudLinux**, but CloudLinux cannot run inside Docker.

Docker Engine and local containers are supported on **CloudLinux OS 8+**.

:::warning CloudLinux OS 7
Docker's official RHEL repository no longer publishes packages for RHEL 7 (`https://download.docker.com/linux/rhel/7/x86_64/stable/` unavailable), so neither method below works on CL7 as-is.
Two legacy paths still exist - see [CloudLinux OS 7 (legacy)](#cloudlinux-os-7-legacy) below. It's recommended to upgrade to a newer CloudLinux OS version via [ELevate](/cloudlinuxos/elevate/).
:::

There are two installation options:

* **Direct installation** - add Docker's RHEL repo and install with `dnf`; no system changes required.
* **Docker convenience script** - served from [get.docker.com](https://get.docker.com); requires a one-time `os-release` workaround.

This guide describes both.

Note that Docker is **not** in default CloudLinux repos; both methods use Docker's [official RHEL repo](https://docs.docker.com/engine/install/rhel/).

## Method 1: Direct installation (repo + dnf)

Add Docker's RHEL repository and install packages with `dnf`. No change to `/etc/os-release` or any other system file is required.

**Steps:**

```bash
# Add Docker repo (RHEL)
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/rhel/docker-ce.repo

# Install and start
sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker

# Verify
sudo docker run --rm hello-world
```

:::tip Notes
* No workaround needed; leave `ID=cloudlinux` in `/etc/os-release` as-is.
* You control exactly which packages and repo are added.
:::

## Method 2: Docker convenience script (get.docker.com)

Use the official [Docker convenience script](https://get.docker.com) (e.g. `curl -fsSL https://get.docker.com | sh`). The script detects the OS via `ID` in `/etc/os-release` and only supports a fixed list of distributions.

CloudLinux is not in that list, so with the default `ID=cloudlinux` the script exits with:

```text
ERROR: Unsupported distribution 'cloudlinux'
```

On CloudLinux OS 10, with `ID=almalinux`, the same applies, since `almalinux` is not supported by the script either.

**Workaround:** Temporarily set `ID=centos` in `/etc/os-release` so the script uses the RHEL/CentOS path and adds the Docker CE repo. Revert `ID` after installation.

**Steps:**

1. **Apply the workaround** (one-time, before running the script). Edit `/etc/os-release` and change:

* CloudLinux OS 8 / CloudLinux OS 9: `ID=cloudlinux` -> `ID=centos`
* CloudLinux OS 10: `ID=almalinux` -> `ID=centos`

2. **Run the script:**

```bash
curl -fsSL https://get.docker.com | sh
```

3. **Start Docker** (if the script didn't):

```bash
sudo systemctl enable --now docker
```

4. **Verify:**

```bash
sudo docker run --rm hello-world
```

:::tip Notes
* The script has **no option or environment variable** to override or ignore the OS check (only `--version`, `--channel`, `--mirror`, etc.). Without modifying the script, the workaround above is the way to use it on CloudLinux.
:::

## CloudLinux OS 7 (legacy)

Docker no longer publishes el7 RPMs to its main RHEL repository, but two archive paths remain on `download.docker.com`.

### Option A: Frozen CentOS 7 RPM archive

The CentOS 7 path on `download.docker.com` is served but frozen.

It will not receive future security updates from Docker - use at your own risk.

* Repo file: [`https://download.docker.com/linux/centos/docker-ce.repo`](https://download.docker.com/linux/centos/docker-ce.repo)
* Package index: [`https://download.docker.com/linux/centos/7/x86_64/stable/Packages/`](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/)

Installation follows the same shape as [Method 1](#method-1-direct-installation-repo-dnf), but with `yum` instead of `dnf` and the CentOS repo file instead of the RHEL one:

```bash
sudo yum -y install yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io
sudo systemctl enable --now docker
```

### Option B: Docker static binaries

Docker publishes OS-independent static binaries that run on any modern x86_64 Linux kernel (including CloudLinux OS 7's LVE kernel).

* Download index: [`https://download.docker.com/linux/static/stable/x86_64/`](https://download.docker.com/linux/static/stable/x86_64/)
* Updated alongside main Docker releases
* Ships `dockerd` and `docker` as standalone binaries - no systemd unit, package-manager integration, or automatic security updates

You will need to write your own systemd unit, manage users/groups, and track upstream releases manually.

See Docker's official [Install Docker Engine from binaries](https://docs.docker.com/engine/install/binaries/) for the procedure.
