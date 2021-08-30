To replace html images with markdown images:

Search: <img src="([^"]+)" width="(\d+)">
Replace: <!-- $0 -->\n![]({attach}$1)