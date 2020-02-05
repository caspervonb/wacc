var start;
var start_rewind;
var start_unwind;
var stop_rewind;
var stop_unwind;

export function sleep(duration)
{
}

export function run(instance)
{
	start = instance.exports.main;
	start_rewind = instance.exports.asyncify_start_rewind;
	start_unwind = instance.exports.asyncify_start_unwind;
	stop_rewind = instance.exports.asyncify_stop_rewind;
	stop_unwind = instance.exports.asyncify_stop_unwind;

	return new Promise(function(resolve) {
		try {
			start();
			resolve();
		} catch (err) {
			if (typeof err == "number") {
				resolve(err);
				return
			}

			throw err;
		}
	});
}