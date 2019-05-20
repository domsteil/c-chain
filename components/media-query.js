import React, { PureComponent } from 'react';

const {
  Provider: MediaQueryProvider,
  Consumer: MediaQueryConsumer
} = React.createContext({
  isTablet: false
});

const withMediaQuery = Comp =>
  class extends PureComponent {
    state = {
      isTablet: false
    };

    onResize = () => {
      const isTablet = window.innerWidth < 960;
      if (isTablet !== this.state.isTablet) {
        this.setState({ isTablet });
      }
    };

    componentDidMount() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    render() {
      const { isTablet } = this.state;

      return (
        <MediaQueryProvider value={{ isTablet }}>
          <Comp isTablet={isTablet} {...this.props} />
        </MediaQueryProvider>
      );
    }
  };

export { MediaQueryProvider, MediaQueryConsumer, withMediaQuery };