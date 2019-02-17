build:
	npx webpack

update-hash: H:=$(shell git rev-parse --short HEAD)
update-hash:
	perl -i -pe 's{\?hash=\K[\w\.]*}{$H};s{/mt-data-api-react@\K[\w\.]*}{$H}' docs/*.html
