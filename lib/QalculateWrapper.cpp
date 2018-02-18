#include <cstring>
#include <thread>
#include "QalculateWrapper.h"
#include <libqalculate/qalculate.h>

// std::shared_ptr<Calculator> calc; // Calculator is shared across methods
Calculator *calc;
MathStructure *mathstruct;

extern "C" {

	void new_calc() {
		// set the locale of the calculator
		setlocale(LC_ALL, "");
		// initialize calculator and load things
		calc = (Calculator*) malloc(sizeof(Calculator) * 4);
		calc = new Calculator();
		// calc = std::shared_ptr<Calculator>(new Calculator());
		bool gdl = calc->loadGlobalDefinitions();
		bool ldl = calc->loadLocalDefinitions();
	}

	char* calculate(const char* input) {
		std::string in_str(input);
		std::string result = "";
		try {
			result = internal_calc_terminate(in_str);
		} catch (std::exception) {
			result = "";
		}
		return string_to_char_arr(result);
	}

}

char* string_to_char_arr(std::string from_str) {
	char* buf = new char[from_str.length() - 1];
	std::copy(from_str.c_str(), from_str.c_str() + from_str.length() + 1, buf);
	return buf;
}

// Do the thing!
std::string internal_calculate(std::string input) {
	calc->beginTemporaryStopMessages();
	
	// Set evaluation options
	EvaluationOptions evalopts;
	evalopts.parse_options.unknowns_enabled = false;
	evalopts.allow_complex = false;
	evalopts.structuring = STRUCTURING_SIMPLIFY;
	evalopts.keep_zero_units = false;

	// Ready expression for calc
	std::string unexpr = calc->unlocalizeExpression(input, evalopts.parse_options);

	// Calculate!
	mathstruct = (MathStructure*) malloc(sizeof(MathStructure) * 4);
	*mathstruct = calc->calculate(unexpr);

	// Format result for returning
	PrintOptions printopts;
	printopts.number_fraction_format = FRACTION_DECIMAL;
	printopts.use_max_decimals = true;
	printopts.max_decimals = 9;
	printopts.use_unicode_signs = true;
	printopts.use_unit_prefixes = true;

	// Do something if result is empty?
	
	mathstruct->format(printopts);
	std::string result = mathstruct->print(printopts);

	return result;
}

// Calculate, and abort current calculation if calc is busy
std::string internal_calc_terminate(std::string input) {
	if (calc->busy()) {
		cout << "Calc is busy. Aborting..." << endl;
		calc->abort();
	}
	return internal_calculate(input);
}

// Calculate, but wait if calc is busy
std::string internal_calc_wait(std::string input) {
	while (calc->busy()) {
		std::chrono::milliseconds duration(10);
		std::this_thread::sleep_for(duration);
	}
}

int main() {
	std::string intest1("1+1");
	new_calc();

	cout << calculate(string_to_char_arr(intest1)) << endl;
}

