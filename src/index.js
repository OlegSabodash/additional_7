module.exports = function solveSudoku(matrix) {
  var testElement;
    var parOne;
    var parTwo;
    var counter;
    var secretSimple = 0;
    var preCountner = 0;
    for (let s = 0; s < 15; s++) {
        counter = 0;
        for (let i = 0; i < matrix.length; i++) {

            testOne: for (let y = 0; y < matrix[i].length; y++) {
                testElement = matrix[i][y];

                if (testElement == 0 || Array.isArray(testElement)) {
                    if (testElement == 0) {
                        matrix[i][y] = [];
                        testElement = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    };

                    testTwo: for (let z = 0; z < matrix.length; z++) {
                        if (testElement.length == 1) {
                            matrix[i][y] = testElement[0];
                            continue testOne;
                        }
                        if (z == testElement.length) {
                            matrix[i][y] = testElement;
                            counter++;
                            break;
                        }
                        var t = testElement[z];

                        for (let w = 0; w < matrix.length; w++) {
                            var a = matrix[i][w];

                            if (testElement[z] == matrix[i][w] && w != y) {
                                testElement.splice(z, 1);
                                z--;
                                continue testTwo;

                            };
                        }

                        for (let l = 0; l < matrix.length; l++) {
                            var g = matrix[l][y];

                            if (t == g && l != i) {
                                testElement.splice(z, 1);
                                z--;
                                continue testTwo;
                            }
                        }

                        if (i >= 0 && i <= 2) {
                            parOne = 0;

                            if (y >= 0 && y <= 2) {
                                parTwo = 0;
                            }
                            if (y >= 3 && y <= 5) {
                                parTwo = 3;
                            }
                            if (y >= 6 && y <= 8) {
                                parTwo = 6;
                            }
                        }
                        if (i >= 3 && i <= 5) {
                            parOne = 3;

                            if (y >= 0 && y <= 2) {
                                parTwo = 0;
                            }
                            if (y >= 3 && y <= 5) {
                                parTwo = 3;
                            }
                            if (y >= 6 && y <= 8) {
                                parTwo = 6;
                            }
                        }
                        if (i >= 6 && i <= 8) {
                            parOne = 6;

                            if (y >= 0 && y <= 2) {
                                parTwo = 0;
                            }
                            if (y >= 3 && y <= 5) {
                                parTwo = 3;
                            }
                            if (y >= 6 && y <= 8) {
                                parTwo = 6;
                            }
                        }
                        for (let c = parTwo, k = parOne, m = 0; m < matrix.length; m++ , c++) {
                            var io = matrix[k][c];

                            if (matrix[k][c] == testElement[z]) {
                                testElement.splice(z, 1);
                                z--;
                                break;
                            }
                            if (c == parTwo + 2) {
                                c = parTwo - 1;
                                k++
                            }


                        }


                    }
                }

            }
        }


        if (preCountner == counter) {

            for (let d = 0; d < matrix.length; d++) {

                for (let h = 0; h < matrix[d].length; h++) {
                    var tu = matrix[d][h];
                    if (Array.isArray(matrix[d][h])) {

                        testSecretTwo: for (let qw = 0; qw < matrix[d][h].length; qw++) {
                            var pr = matrix[d][h][qw];

                            for (let qe = 0; qe < matrix.length; qe++) {
                                var ty = matrix[d][qe];
                                if (Array.isArray(matrix[d][qe]) && qe != h) {
                                    for (let qr = 0; qr < matrix[d][qe].length; qr++) {
                                        var qt = matrix[d][qe][qr];
                                        if (qt == pr) {

                                            continue testSecretTwo;
                                        }



                                    }

                                }

                            }
                            
                            
                               
                               matrix[d].splice(h,1,pr);   
                               counter--; 


                        }

                    }

                }


            }
        
        }

        if (preCountner == counter) {


            for (let d = 0; d < matrix.length; d++) {

                for (let h = 0; h < matrix[d].length; h++) {
                    var tu = matrix[h][d];
                    if (Array.isArray(matrix[h][d])) {

                        testSecretTwo: for (let qw = 0; qw < matrix[h][d].length; qw++) {
                            var  ui = matrix[h][d][qw];

                            for (let qe = 0; qe < matrix.length; qe++) {
                                var ty = matrix[qe][d];
                                if (Array.isArray(matrix[qe][d]) && qe != h) {
                                    for (let qr = 0; qr < matrix[qe][d].length; qr++) {
                                        var qt = matrix[qe][d][qr];
                                        if (qt == ui) {

                                            continue testSecretTwo;
                                        }



                                    }

                                }

                            }
                            
                            
                               
                               matrix[h].splice(d,1,ui);    


                        }

                    }

                }

            }
        }
         preCountner = counter;


    }
    return matrix;
}
            

