/**
 * @jest-environment jsdom
 */
import React from 'react';
interface ISearchabledropdown {
    defaultSelected?: DefaultSelected;
    isHalf?: boolean;
    data: any[];
    placeholder: string;
    error?: string;
    labelExtractor: (item: any) => string;
    keyExtractor: (item: any) => string;
    onChange: (key: FormedDataItems['key']) => void;
    activeColor?: string;
}
declare type DefaultSelected = {
    name: string | null;
    id: string | null;
};
declare type FormedDataItems = {
    label: string;
    key: string;
};
export declare const SearchableDropdown: React.ForwardRefExoticComponent<ISearchabledropdown & React.RefAttributes<unknown>>;
export {};
