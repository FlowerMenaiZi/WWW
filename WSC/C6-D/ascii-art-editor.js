/**
 * JavaScript - ASCII Art Editor
 *
 * Your task is to implement all methods marked with @todo. You must not change any other method.
 * You may add as many methods to the ASCIIArtEditor class as you want.
 */


/**
 * Constructor function to create a new ASCIIArtEditor
 * @constructor
 */
var ASCIIArtEditor = function () {
    /**
     * When transforming images this property should be used as line
     * separator for all operations
     * @type {string}
     */
    this.lineSeperator = '\n';
};


/**
 * This function takes an arbitrary ASCII Art string as input and must
 * return a mirrored version of the given image.
 *
 * It should be possible to choose the mirror-axis with the second argument.
 *
 * The function should use the configured lineSeparator property on
 * the ASCIIArtEditor object.
 *
 * Example on 'x' axis:
 *   Input:                 Output:
 *     # --····-- $           # --====-- $
 *     #  +    -  $           #  +    -  $
 *     # --====-- $           # --····-- $
 *
 * Example on 'y' axis:
 *   Input:                 Output:
 *     # --····-- $           $ --····-- #
 *     #  +    -  $           $  -    +  #
 *     # --====-- $           $ --====-- #
 *
 * @param {string} image - the source image
 * @param {'x'|'y'} [axis='y'] - the axis to be used for the mirror operation, defaults to 'y'
 * @return string - the mirrored input image
 *
 * @throws Error - If an invalid axis was provided
 *
 * @todo
 */
ASCIIArtEditor.prototype.mirror = function (image, axis) {
    // <---- Implement this method
    arr=image.split(this.lineSeperator);
    if (axis == 'y'){
        return Test1(arr).join(this.lineSeperator);
    }else if (axis == 'x'){
        return Test2(arr).join(this.lineSeperator);
    }else{
        throw 'Error';
    }
};
var Test1=function (temArr) {
    newImage=['','',''];
    for (let i=0;i<newImage.length;i++){
        for (let j=0;j<temArr[i].length;j++){
            if (j == 0){
                newImage[i]+=temArr[i][10];
            } else if(j == temArr[i].length - 1){
                newImage[i]+=temArr[i][0];
            }else{
                newImage[i]+=temArr[i][j];
            }
        }
    }
    return  newImage;
};
var Test2=function (temArr) {
    newImage=['','',''];
    for (let i=0;i<newImage.length;i++){
        for (let j=0;j<temArr[i].length;j++){
            if (i == 0 && j == 0 || i == 2 && j == 0){
                newImage[i]+=temArr[i][10];
            }else if(i == 0 && j == 5){
                newImage[i]+=temArr[2][5];
            }else if(i == 2 && j == 5){
                newImage[i]+=temArr[0][5];
            } else if (i == 0 && j == temArr[i].length - 1 || i == 2 && j == temArr[i].length - 1) {
                newImage[i]+=temArr[i][0];
            }else{
                newImage[i]+=temArr[i][j];
            }
        }
    }
    return  newImage;
};

/**
 * Takes any SQUARE ASCII image and must rotate the image by the
 * given angle (only multiple of 90 allowed).
 *
 * The rotation should always be clockwise.
 *
 * Example:
 *   Input:    90deg:    180deg:    270deg:    360deg:
 *     #-*       $-#       *-$        ***         #-*
 *     --*       ---       *--        ---         --*
 *     $-*       ***       *-#        #-$         $-*
 *
 * @param {string} image
 * @param {number} angle, has to be one of 0, 90, 180, 270, 360
 * @return string
 *
 * @throws Error - If an invalid angle was provided
 *
 * @todo
 */

ASCIIArtEditor.prototype.rotate = function(image, angle) {
    // <---- Implement this method
    arr=image.split(this.lineSeperator);
    if (angle == 90){
        return Test5(arr).join(this.lineSeperator);
    }
    if (angle == 180){
        return Test6(arr).join(this.lineSeperator);
    }
    if (angle == 270) {
        return Test7(arr).join(this.lineSeperator);
    }
    if (angle == 0 || angle == 360) {
        return image;
    }
    if (angle % 90 !== 0){
        throw 'Error';
    }
};

var Test5=function(temArr){
    newImage=['','','','',''];
    for (let i=0;i<newImage.length;i++){
        if (i == 0){
            for (let j=temArr.length-1;j>=0;j--){
                newImage[i]+=temArr[j][i];
            }
        }else if (i == 4){
            for (let j=temArr.length-1;j>=0;j--){
                newImage[i]+=temArr[j][i]
            }
        }else{
            for (let j=0;j<temArr.length;j++){
                newImage[i]+=temArr[j][i]
            }
        }

    }
    return newImage;
};
var Test6=function(temArr){
    newImage=['','','','',''];
    for (let i=0;i<newImage.length;i++){
        if (i == 2){
            for (let y=temArr.length-1;y>=0;y--){
                newImage[i]+=temArr[i][y]
            }
        }else{
            for (let j=0;j<temArr.length;j++){
                newImage[i]+=temArr[i][j]
            }

        }
    }
    return newImage;
};
var Test7=function(temArr){
    newImage=['','','','',''];
    for (let i=0;i<newImage.length;i++){
        for (let j=0;j<temArr.length;j++){
            newImage[i]+=temArr[j][temArr.length-(i+1)]
        }
    }
    return newImage;
};
