import {FilterOptions} from "../components/types";
import {useState} from "react";
import {RadioChangeEvent} from "antd";

export function useTodoFilter(initial: FilterOptions){
    const [filterOption, setFilterOption] = useState<FilterOptions>(initial);
    const handleFilterOptionChange = (e: RadioChangeEvent) => {
        setFilterOption(e.target.value);
    }

    return {
        filterOption,
        handleFilterOptionChange
    }
}