BIN = `npm bin`
all:
	echo $(BIN)
	$(BIN)/browserify src/wrapper.js -o src/Native/VDomVirtualize.js
