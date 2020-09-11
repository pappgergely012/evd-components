/**
 * @jest-environment jsdom
 */

import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { removeAccents, isExist } from '../index';
import { Input } from '../index';

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

interface IState {
  formedData: any[],
  input: Value;
  selected: Value;
  show: boolean;
}

type Value = {
  value: string;
  error: string;
}

type DefaultSelected = {
  name: string | null;
  id: string | null;
}

type FormedDataItems = {
  label: string;
  key: string;
}

export const SearchableDropdown = forwardRef((props: ISearchabledropdown, ref: any) => {
  const { data, isHalf, placeholder, defaultSelected, labelExtractor, error, onChange, keyExtractor, activeColor } = props;
  const [formedData, setFormedData] = useState<IState['formedData']>([]);
  const [input, setInputVal]        = useState<IState['input']>({ value: '', error: '' });
  const [selected, setSelected]     = useState<IState['selected']>({ value: '', error: '' });
  const [show, setShow]             = useState<IState['show']>(false);
  const dropdownRef                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setData();
  }, [data])

  useEffect(() => {
    if (error) {
      if (formedData && formedData.length > 0) {
        setInputVal({ ...input, error: 'Válassz egyet a listából!'});
      } else {
        setInputVal({ ...input, error: 'A mező kitöltése kötelező!'});
      }
    } else {
      setInputVal({ ...input, error: '' });
    }
  }, [error])

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  }, [show])

  useEffect(() => {
    if (isExist(defaultSelected)) {
      setDefault();
    } else {
      setInputVal({ value: '', error: ''});
      setSelected({ value: '', error: ''});
    }
  }, [defaultSelected])

  const handleClickOutside = (ev: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(ev.target)) {
      onBlur(false);
    }
  }

  const setDefault = () => {
    if (formedData) {
      if (defaultSelected && isExist(defaultSelected.id) && typeof defaultSelected.id === 'string') {
        const item = formedData.find(i => i.key == defaultSelected.id);
  
        setSelected({ value: defaultSelected.id, error: ''});
        setInputVal({ value: item.label, error: '' });
      }

      return;
    } 
      
    if (defaultSelected && isExist(defaultSelected.name) && typeof defaultSelected.name === 'string') {
      setInputVal({ value: defaultSelected.name, error: '' });
    }
  } 

  const setData = () => {
    if (data && data.length > 0) {
      const tempData: FormedDataItems[] = [];
  
      data.map(item => {
        const label = labelExtractor(item);
        const key   = keyExtractor(item);
  
        tempData.push({ label, key})
      })
  
      setFormedData(tempData);
    }
  }
  
  const onSelect = (item: FormedDataItems) => {
    onChange(item.key);
    setInputVal({ value: item.label, error: '' });
    setSelected({ value: item.key, error: '' });
  }

  /**
   * @param {string} value 
   * Ha van formedData az azt jelenti, hogy ez egy tényleges searchable dropdown, amennyiben nincs így egy sima inputként kell működnie
   * ezért ha nincs formedData akkor visszaadjuk az inputba írt értéket
   */
  const onInputChange = (value: string) => {
    setInputVal({ ...input, value});
    setSelected({ value: '', error: ''});

    if (formedData && formedData.length > 0 && selected.value === '' && value.length >= 3) {
      formedData.map(item => {
        const label = removeAccents(item.label.toLowerCase());
        const val   = removeAccents(value.toLowerCase());

        if (label === val) {
          onChange(item.key);
          onSelect(item);
        }
      })
      return;
    } else {
      onChange('');
    }

    if (!formedData || formedData.length < 1) {
      onChange(value);
    }
  }

  const onBlur = async (itemClicked: boolean, item?: FormedDataItems) => {
    if (itemClicked && item) {
      onSelect(item);
    }
    
    document.removeEventListener('mousedown', handleClickOutside);
    setShow(false);
  }

  const filterList = () => (
    formedData.filter(item => {
      const label = removeAccents(item.label.toLowerCase());
      const value = removeAccents(input.value.toLowerCase());

      if (label.startsWith(value)) {
        return item;
      }
    })
  );

  const getList = () => {
    if (show && formedData && formedData.length > 0) {
      const filteredList = filterList();

      if (filteredList.length < 1 && selected.error === '') {
        setSelected({ value: '', error: 'Nincs település a keresett szóra!'})
      }

      return (
        <div 
          style={activeColor ? { border: `1px solid ${activeColor}`, borderTop: '0px' } : undefined}
          className={input.error !== '' ? 'dropdown-list has-error' : 'dropdown-list'}
        >
          {filteredList.map(item => (
            <div 
              onClick={() => onBlur(true, item)}
              className={selected.value === item.key ? "dropdown-item selected" : "dropdown-item"}
              key={item.key}
            >
              {item.label}
            </div>
          ))}

          {selected.error !== '' ? <div className="list-error">{selected.error}</div> : null}
        </div>
      )
    }
  }

  const getStlye = () => {
    let value = '';

    if (show && formedData.length > 0) {
      value += 'border-bottom-off ';
    }
    
    return value;
  }

  return (
    <div 
      ref={dropdownRef} 
      className={isHalf ? "dropdown dropdown--searchable half" : "dropdown dropdown--searchable full"}
    >
      <Input
        placeholder={placeholder}
        value={input.value}
        onFocus={() => setShow(true)}
        className={getStlye()}
        onChange={(value) => onInputChange(value)}
        error={input.error}
        activeColor={activeColor}
      />

      {getList()}
    </div>
  );
});
