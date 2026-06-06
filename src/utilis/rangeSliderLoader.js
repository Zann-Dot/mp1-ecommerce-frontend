export default function rangeSliderLoader(sliderRef) {
    const range = sliderRef.current;
    if (!range) return;

    const rangeInstance = new HSRangeSlider(range);
    const min = document.querySelector(
        "#hs-pass-values-to-html-elements-min-target",
    );
    const max = document.querySelector(
        "#hs-pass-values-to-html-elements-max-target",
    );

    range.noUiSlider.on("update", () => {
        min.innerText = rangeInstance.formattedValue[0];
        max.innerText = rangeInstance.formattedValue[1];
    });

    return () => {
        if (range.noUiSlider) range.noUiSlider.destroy();
    };
}