#!/bin/sh
cd /data/code/v3-admin-vite/
source ~/.bashrc
unset http_proxy
unset https_proxy
git pull
pnpm build:prod

