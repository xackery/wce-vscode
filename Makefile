NAME := wce-vscode

DOCKER_ARGS := --rm  --name ${NAME} -v ${PWD}:/src -w /src ${NAME}
init:
	docker run -it ${DOCKER_ARGS} yo code
bash:
	docker run -it ${DOCKER_ARGS} bash
.PHONY: build
build: docker-image-build
	docker run ${DOCKER_ARGS} npm run compile
.PHONY: run
run:
	npm run debug
.PHONY: package
package:
	docker run ${DOCKER_ARGS} ./node_modules/vsce/vsce package
	@echo "Go to https://marketplace.visualstudio.com/manage/publishers/xackery for publish updating"

docker-image-build:
ifeq ($(shell docker images -q ${NAME} 2> /dev/null),)
	@echo "Docker image not found. Building..."
	cd .devcontainer && docker build -f Dockerfile -t ${NAME} .
endif