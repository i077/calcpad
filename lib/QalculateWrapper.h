#ifndef __QALCULATEWRAPPER_H
#define __QALCULATEWRAPPER_H

#ifdef __cplusplus
extern "C" {
#endif

void new_calc();
 
char* calculate(const char* input);

#ifdef __cplusplus
}
char* string_to_char_arr(std::string from_str);
std::string internal_calculate(std::string input);
std::string internal_calc_terminate(std::string input);
std::string internal_calc_wait(std::string input);
#endif

#endif
