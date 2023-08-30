const InputThemes = {
    variants: {
        green: {
            field: {
                border: "1px solid",
                borderColor: "#38a169",
                _focus: {
                    borderColor: "#38a169",
                    boxShadow: "0 0 0 1px #38a169",
                },
                _hover: {
                    borderColor: "#91d2af",
                },
                _invalid: {
                    borderColor: "#E96372",
                    _focus: {
                        borderColor: "red",
                        boxShadow: "0 0 0 1px red",
                    },
                    _hover: {
                        borderColor: "#eb647477",
                    },
                },
            },
        },
    },
};

export default InputThemes;
