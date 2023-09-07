#!/bin/sh
source ~/.bashrc
unset http_proxy
unset https_proxy
git pull
pnpm build:prod

