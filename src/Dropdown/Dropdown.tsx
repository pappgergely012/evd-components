import React, { useState, useEffect } from "react";
import '../styles/Dropdown.scss';

export interface IDropdown {
  data: any[];
  placeholder: string;
  defaultSelected?: string;
  errorMsg?: string;
  keyExtractor: (val: any) => number;
  labelExtractor: (val: any) => string;
  onItemClicked: (val: any) => void;
}

export interface IState {
  formedData: any[];
  title: string;
  selected?: string;
  showList: boolean;
}

export const Dropdown = (props: IDropdown) => {
  const [title, setTitle]       = useState<IState['title']>(props.placeholder);
  const [selected, setSelected] = useState<IState['selected']>('');
  const [formedData, setData]   = useState<IState['formedData']>([]);
  const [showList, setShowList] = useState<IState['showList']>(false);

  useEffect(() => {
    if (compare()) {
      setTitle(props.placeholder);
      setSelected('');
    }

    initData();
  }, [props.data]);

  useEffect(() => {
    if (props.defaultSelected) {
      setSelected(props.defaultSelected);
      setDefaultTitle();
    }
  }, [formedData])

  const compare = (): boolean => {
    const newData = props.data.map((i: any): string => JSON.stringify(props.labelExtractor(i)));
    const oldData = formedData.map((i: any): string => JSON.stringify(i.name));

    return JSON.stringify(newData) !== JSON.stringify(oldData) ? true : false;
  };

  const setDefaultTitle = (): void => {
    formedData.map((item) => {
      if(item.key === props.defaultSelected) {
        setTitle(item.name);
        props.onItemClicked(item);
      }
    })
  }

  const initData = () => {
    const tempData: object[] = [];

    props.data.map((item) => {
      const label = props.labelExtractor(item);
      const key = props.keyExtractor(item);

      tempData.push({ name: label, key });
    });

    setData(tempData);
  };

  const renderList = () => {
    if (showList) {
      return (
        <div className="dropdown-list">
          {formedData.map((item) => (
            <div
              className={selected === item.key ? 'dropdown-item selected' : 'dropdown-item'}
              key={item.key}
              onClick={() => itemClicked(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const renderError = () => {
    if (props.errorMsg) {
      return <span className="dropdown-error">{props.errorMsg}</span>
    }
  }

  const itemClicked = (item: any) => {
    setSelected(item.key);
    setTitle(item.name);
    setShowList(false);
    props.onItemClicked(item);
  };

  return (
    <div className={showList ? 'dropdown open' : 'dropdown'}>
      <div className="dropdown-row" onClick={() => setShowList(!showList)}>
        <span className="dropdown-title">{title}</span>
        <span className="dropdown-arrow"></span>
      </div>

      {renderList()}
      {renderError()}
    </div>
  );
}