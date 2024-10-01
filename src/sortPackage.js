function sortPackage({ width, height, length, mass }) {
    const VOLUME_THRESHOLD = 1000000; 
    const DIMENSION_THRESHOLD = 150;

    if ([width, height, length, mass].some(val => typeof val !== 'number' || isNaN(val) || val <= 0)) {
        throw new Error('All dimensions should be  a positive numbers.');
    }
    // Compute the volume of the package
    const volume = width * height * length;
    if (volume >= VOLUME_THRESHOLD || [width, height, length].some(dim => dim >= DIMENSION_THRESHOLD)) {
        return `Bulky package to Stack A`;
    }
    return `Regular package to Stack B`;
}