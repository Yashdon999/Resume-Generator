import { HStack, useRadioGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useResume } from "../../Context";
import ThemeOption from "./ThemeOption";

const ThemeSelect = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState("#FFFFFF");
  const { theme, setTheme } = useResume();
  const options = [
    "blue",
    "purple.400",
    "green.400",
    "gray.400",
    "red.400",
    "orange.400",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    value: theme,
    onChange: setTheme,
  });

  const group = getRootProps();

  const handleCustomColorChange = (color) => {
    setCustomColor(color.hex);
    setTheme(color.hex);
  };

  const handleShowColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <HStack
      {...group}
      css={{
        "@media screen and (max-width: 768px)": {
          flexWrap: "wrap",
          justifyContent: "center",
        },
      }}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <ThemeOption key={value} {...radio}>
            {value}
          </ThemeOption>
        );
      })}
      <div
        onClick={handleShowColorPicker}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundImage:
            "url('https://e7.pngegg.com/pngimages/383/76/png-clipart-multicolored-circle-illustration-color-wheel-complementary-colors-color-scheme-color-miscellaneous-photography.png')",
          backgroundColor: customColor,
          border: "1px solid #CCC",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      {showColorPicker && (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            top: "100px",
            right: "0px",
            bottom: "0px",
            left: "450px"
          }}
        >
          <ChromePicker
            color={customColor}
            onChange={handleCustomColorChange}
          />
        </div>
      )}
    </HStack>
  );
};

export default ThemeSelect;
