
exports.resolveDelimiterChar = char => {
    if (char === ',' || char === ';') return char;
    if (typeof char === 'undefined') return ',';
    throw new Error('Invalid field delimiter');
};
