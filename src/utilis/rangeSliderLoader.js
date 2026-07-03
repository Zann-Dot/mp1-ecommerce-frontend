

export default function rangeSliderLoader(sliderRef, setMinPrice, setMaxPrice) {
    const range = sliderRef.current;
    if (!range) return;

    const rangeInstance = new HSRangeSlider(range);

    range.noUiSlider.on("update", () => {
        setMinPrice(Number(rangeInstance.formattedValue[0]));

        setMaxPrice(Number(rangeInstance.formattedValue[1]));
    });

    return () => {
        if (range.noUiSlider) range.noUiSlider.destroy();
    };
}
