extern void write_hello(void) __attribute((
	__import_module__("test")
));

int main (int argc, char const* argv[])
{
	write_hello();

	return 0;
}