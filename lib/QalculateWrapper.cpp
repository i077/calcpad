#include <iostream>
#include <cstring>
#include <libqalculate/qalculate.h>

Calculator* calc;

void new_calc() {
	calc = new Calculator();
	calc->loadGlobalDefinitions();
	calc->loadLocalDefinitions();
}

std::string calculate(std::string input) {
	EvaluationOptions eo;
	MathStructure result;
	calc->calculate(&result, input, 5000, eo);
	PrintOptions po;
	result.format(po);
	return result.print(po);
}

/*
int main() {
	std::string query = "1+1";
	new_calc();
	EvaluationOptions eo;
	MathStructure result;
	while (query != "quit") {
        cout << "> ";
        getline(cin, query);
		cout << calculate(query) << endl;
	}
}
*/

