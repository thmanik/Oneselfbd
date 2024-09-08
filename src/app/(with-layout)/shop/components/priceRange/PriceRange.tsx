"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 6000;
const DEFAULT_MAX = 1300;

type PriceRangeSliderProps = {
  initialState: number[];
  setInitialState: Dispatch<SetStateAction<number[]>>;
};

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  initialState,
  setInitialState,
}) => {
  // Initialize values to [1, DEFAULT_MAX] if no initialState is provided
  const [values, setValues] = useState<number[]>(
    initialState.length === 0 ? [1, DEFAULT_MAX] : initialState
  );

  useEffect(() => {
    // Ensure the minimum value is at least 1 and set the default max to DEFAULT_MAX if needed
    if (initialState[0] < 1 || initialState[1] === undefined) {
      setInitialState([1, DEFAULT_MAX]);
    }
    setValues(initialState);
  }, [initialState, setInitialState]);

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
    setInitialState(newValues);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <input
          type="text"
          value={`৳${values[0]}`}
          readOnly
          style={{
            width: "60px",
            textAlign: "center",
            border: "1px solid #00c1f3",
            borderRadius: "4px",
            padding: "5px",
            marginRight: "10px",
          }}
        />
        <input
          type="text"
          value={`৳${values[1]}`}
          readOnly
          style={{
            width: "60px",
            textAlign: "center",
            border: "1px solid #00c1f3",
            borderRadius: "4px",
            padding: "5px",
            marginLeft: "10px",
          }}
        />
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "80%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#00c1f3", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "24px",
              width: "24px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              border: isDragged ? "3px solid #00c1f3" : "3px solid #00c1f3",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#00c1f3" : "#00c1f3",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default PriceRangeSlider;
