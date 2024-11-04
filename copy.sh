#!/bin/bash

# 设置源目录和目标目录路径
SOURCE_DIR="pingora/docs/user_guide/"  # 替换为你的源文件夹路径
DEST_DIR="pages/user_guide"  # 替换为你的目标文件夹路径

# 确保目标目录存在
mkdir -p "$DEST_DIR"

# 遍历源目录下的所有 .md 文件
for file in "$SOURCE_DIR"/*.md; do
  if [ -f "$file" ]; then
    # 获取文件名（不含目录和后缀）
    filename=$(basename "$file" .md)
    # 重命名为 .mdx 并复制到目标目录
    cp "$file" "$DEST_DIR/$filename.mdx"
  fi
done

echo "All .md files have been copied and renamed to .mdx in $DEST_DIR."