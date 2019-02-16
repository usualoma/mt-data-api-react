build:
	npx webpack

update-hash: H=$(shell git rev-parse --short HEAD)
update-hash:
	perl -i -pe 's{\?hash=\K\w*}{$H}' docs/*.html
