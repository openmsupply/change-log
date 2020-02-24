
const prefixes = {
    CUSTOMER: 'Customer',
    BUG: 'Bug',
    FEATURE: 'Feature'
};

const bugTypes = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development'
}

const featureTypes = {
    NEW: 'new',
    EXISTING: 'existing'
}

function getPrefix (label) {
    const labelPrefix= label.split(':');
    return (labelPrefix.length > 0) ? labelPrefix[0].trimRight() : '';
}

function getType (label) {
    const labelType = label.split(':');
    return (labelType.length > 1) ? labelType[1].trimLeft() : '';
}

function getTitle (label) {
    const prefix = getPrefix(label);
    const type = getType(label);

    switch(prefix) {
        case prefixes.FEATURE:
            switch (type) {
                case featureTypes.EXISTING:
                    return `\n\n## Improvements`;
                case featureTypes.NEW:
                    return `\n\n## New Features`;
                default:

                    console.log(type, featureTypes.EXISTING, featureTypes.NEW, type === featureTypes.EXISTING, type === featureTypes.NEW);
                    return `\n\n## ${prefix}:${type} - No title preset`;
            }
        case prefixes.BUG:
            switch (type) {
                case bugTypes.PRODUCTION:
                    return `\n\n## Bug fixes`;
                default:
                    console.log(type, bugTypes.PRODUCTION, type === bugTypes.PRODUCTION);
                    return `\n\n## ${prefix}:${type} - No title preset`;
            }
        default:
            return `\n\n## ${prefix} - No title preset`;
    }
}

function checkSomeLabelEquals(labels, prefix, value) {
    return labels.some(({name}) => name === `${prefix}: ${value}`);
}

function checkSomeLabelHasPrefix(labels, prefix) {
    labels.some(({name}) => getPrefix(name) === prefix);
}

module.exports = {
    prefixes,
    getTitle,
    checkSomeLabelEquals,
    checkSomeLabelHasPrefix
}