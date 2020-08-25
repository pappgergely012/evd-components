import * as React from "react";
import '../styles/Input.scss';

export interface IInput {
  placeholder: string;
  value: string;
  isHalf?: boolean;
  className?: string;
  error?: string;
  type?: string;
  activeColor?: string;
  onBlur?: () => void;
  onChange: (val: string) => void;
}

export interface IState {
  focused: boolean;
}

export default class Input extends React.Component<IInput, IState> {
  constructor(props: IInput) {
    super(props);

    this.state = {
      focused: false
    }

    if (this.props.activeColor && this.props.activeColor?.match('/^#(?:[0-9a-f]{3}){1,2}$/i')) {
      throw new Error('EInput activeColor must be a hex code (ie: #333 || #333333)');
    }
  }

  getStyle = (): string => {
    let style: string = 'input-container';

    if (this.state.focused) style += ' focused';

    if (this.props.className) style += `  ${this.props.className}`;

    if (this.props.value.length > 0) style += ' not-empty';

    return style;
  }

  onblur = (): void => {
    this.setState((prevState) => ({
      ...prevState,
      focused: false
    }));

    this.props.onBlur && this.props.onBlur()
  };

  onfocus = (): void => {
    this.setState((prevState) => ({
      ...prevState,
      focused: true
    }));
  }

  render() {
    const { placeholder, value, isHalf, onChange, type, activeColor } = this.props;
    const { focused } = this.state;

    return (
      <div className={isHalf ? 'half-input-outer' : 'full-input-outer'}>
        <div className={this.getStyle()}>
          <label className="input-placeholder" style={activeColor && focused ? {color: activeColor} : undefined }>
            {placeholder}
          </label>

        <input 
          className="input"
          value={value}
          style={activeColor && focused ? {boxShadow: `10px 20px 30px rgba(${activeColor}, .4)`, borderColor: activeColor} : undefined }
          onChange={(ev) => onChange(ev.target.value)}
          onBlur={() => this.onblur()}
          onFocus={() => this.onfocus()}
          type={type}
        />
      </div>
    </div>
    )
  }
}
