BIN = node_modules/.bin

# Start the server
example:
	$(BIN)/jade example/index.jade -w

.PHONY: example