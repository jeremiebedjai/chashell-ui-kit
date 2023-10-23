#!/bin/bash

TAG_NAME=$1
ASSET_PATH=$2

RELEASE_ID=$(gh release view $TAG_NAME --json id -q ".id" 2>/dev/null)

if [ "$RELEASE_ID" ]; then
    gh release upload $TAG_NAME $ASSET_PATH --clobber
else
    gh release create $TAG_NAME $ASSET_PATH
fi