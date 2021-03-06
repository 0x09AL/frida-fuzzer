/*

   frida-fuzzer - frida agent instrumentation
   ------------------------------------------

   Written and maintained by Andrea Fioraldi <andreafioraldi@gmail.com>
   Based on American Fuzzy Lop by Michal Zalewski

   Copyright 2019 Andrea Fioraldi. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at:

     http://www.apache.org/licenses/LICENSE-2.0

 */

exports.MAP_SIZE = 65536; // 2^16, AFL default
//exports.MAP_SIZE = 16384; // 2^14, small APIs doesn't require a large map

exports.MAX_FILE = 102400;

exports.HAVOC_STACK_POW2 = 7;

exports.HAVOC_CYCLES = 256;
exports.SPLICE_HAVOC = 32;

exports.SPLICE_CYCLES = 15;

exports.HAVOC_BLK_SMALL  = 32;
exports.HAVOC_BLK_MEDIUM = 128;
exports.HAVOC_BLK_LARGE  = 1500;
exports.HAVOC_BLK_XL     = 32768;

exports.INTERESTING_8  = [-128, -1, 0, 1, 16, 32, 64, 100, 127];
exports.INTERESTING_16 = [-32768, -129, 128, 255, 256, 512, 1000, 1024, 4096, 32767];
exports.INTERESTING_32 = [-2147483648, -100663046, -32769, 32768, 65535, 65536, 100663045, 2147483647];

exports.ARITH_MAX = 35;

exports.SKIP_TO_NEW_PROB   = 99;
exports.SKIP_NFAV_OLD_PROB = 95;
exports.SKIP_NFAV_NEW_PROB = 75;

exports.QUEUE_CACHE_MAX_SIZE = 200*1024*1024; // 200 MB

exports.UPDATE_TIME = 60; // 60 seconds
