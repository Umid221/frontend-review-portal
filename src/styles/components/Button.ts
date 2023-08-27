const ButtonThemes = {
    variants: {
        green: {
            bg: "#38A169",
            color: "white",
            _hover: {
                bg: "#5aad81",
            },
            _active: {
                bg: "#256d47",
            },
            _focus: {
                boxShadow: "0 0 0 3px #7dcda2",
            },
            _loading: {
                opacity: 0.8,
                _hover: {
                    bg: "#5aad81",
                },
            },
        },
    },
};

export default ButtonThemes;
