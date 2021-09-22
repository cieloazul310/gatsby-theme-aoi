import { mergeViewports, viewportsToSxDisplay } from '../layoutViewports';

describe('mergeViewports', () => {
  it('default component viewports', () => {
    const componentViewports = mergeViewports(undefined);
    expect(componentViewports.SwipeableDrawer).toBe('smDown');
    expect(componentViewports.PermanentDrawer).toBe('mdUp');
    expect(componentViewports.BottomNav).toBe('xsDown');
    expect(componentViewports.Fab).toBe('smDown');
  });

  it('custom component viewports', () => {
    const componentViewports = mergeViewports({
      SwipeableDrawer: 'xsUp',
      PermanentDrawer: false,
      Fab: 'xsUp',
    });
    expect(componentViewports.SwipeableDrawer).not.toBe('smDown');
    expect(componentViewports.SwipeableDrawer).toBe('xsUp');
    expect(componentViewports.PermanentDrawer).toBe(false);
    expect(componentViewports.BottomNav).toBe('xsDown');
    expect(componentViewports.Fab).toBe('xsUp');
  });
});

describe('viewportsToSxDisplay', () => {
  it('viewports to sx display', () => {
    expect(viewportsToSxDisplay('smUp')).toStrictEqual({
      xs: 'none',
      sm: 'block',
    });
    expect(viewportsToSxDisplay('mdDown')).toStrictEqual({
      xs: 'block',
      lg: 'none',
    });
    expect(viewportsToSxDisplay(false)).toStrictEqual('none');
    expect(viewportsToSxDisplay(true)).toStrictEqual('block');
  });
});

/*
describe('viewportsToHidden', () => {
  it('viewports to hidden', () => {
    expect(viewportsToHidden('smUp')).toStrictEqual({
      xsDown: true,
    });
    expect(viewportsToHidden(false)).toStrictEqual({
      xsUp: true,
    });
    expect(viewportsToHidden(true)).toStrictEqual({});
  });
});
*/