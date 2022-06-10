mobiscroll.datepicker('#range', {
    controls: ['calendar'],
    select: 'range',
    startInput: '#start',
    endInput: '#end',
    calendarType: 'month',
    pages: 2,
    touchUi: true
});
responsive: {
    xsmall: {
        display: 'center',
        pages: 1,
        touchUi: true
    },
    medium: {
        display: 'center',
        pages: 2,
        touchUi: true
    },
    custom: { // Custom breakpoint
        breakpoint: 850,
        display: 'center',
        pages: 2,
        touchUi: false
    }
}

theme: 'windows',
themeVariant: 'dark'
