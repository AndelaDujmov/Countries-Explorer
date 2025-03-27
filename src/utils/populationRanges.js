const populationRanges = [
    { label: "<1M", min: 0, max: 999999 },
    { label: "1M-10M", min: 1000000, max: 9999999 },
    { label: "10M-50M", min: 10000000, max: 49999999 },
    { label: ">50M", min: 50000000, max: Infinity }
]

const fetchRanges = () => {
    return populationRanges.map(el => el.label)
}

export default [populationRanges, fetchRanges]