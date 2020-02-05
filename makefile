test/index.html: test/main.c
	bin/wasm-cc -o $@ --target=wasm32-ecmascript-unknown -g -Llib -nostdlib -Wl,--no-entry,--export-all,--allow-undefined,--export-table $<

clean:
	$(RM) test/index.html