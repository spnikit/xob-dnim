import {filterOptions, spacingSize} from "../constants";
import {Button, Radio, RadioChangeEvent, Space} from "antd";
import {FilterOptions} from "../types";


interface TodoControlsProps {
    itemsLeft: number;
    filterOption: FilterOptions;
    onFilterOptionChange: (e: RadioChangeEvent) => void;
    onClearCompleted: () => void;

}

export const TodoControls = (
    {itemsLeft, filterOption, onFilterOptionChange, onClearCompleted}: TodoControlsProps
) => {
    return (
        <Space size={spacingSize}>
                            <span>
                                {itemsLeft} items left
                            </span>
            <Radio.Group
                optionType="button"
                value={filterOption}
                onChange={onFilterOptionChange}
            >
                {filterOptions.map((item) => (
                    <Radio.Button key={item} value={item}>
                        {item}
                    </Radio.Button>
                ))}
            </Radio.Group>
            <Button onClick={onClearCompleted}>Clear Completed</Button>
        </Space>
    )
}