import { Store } from './components/Store';
import { EventsRegistry } from './events/EventsRegistry';
import { ComponentProvider } from 'react-native';
import { ComponentType } from 'react';
export declare class Navigation {
    readonly Element: React.ComponentType<{
        elementId: any;
        resizeMode?: any;
    }>;
    readonly store: Store;
    private readonly nativeEventsReceiver;
    private readonly uniqueIdProvider;
    private readonly componentRegistry;
    private readonly layoutTreeParser;
    private readonly layoutTreeCrawler;
    private readonly nativeCommandsSender;
    private readonly commands;
    private readonly eventsRegistry;
    private readonly commandsObserver;
    private readonly componentEventsObserver;
    constructor();
    /**
     * Every navigation component in your app must be registered with a unique name.
     * The component itself is a traditional React component extending React.Component.
     */
    registerComponent(componentName: string, getComponentClassFunc: ComponentProvider): ComponentType<any>;
    /**
     * Utility helper function like registerComponent,
     * wraps the provided component with a react-redux Provider with the passed redux store
     */
    registerComponentWithRedux(componentName: string, getComponentClassFunc: ComponentProvider, ReduxProvider: any, reduxStore: any): ComponentType<any>;
    /**
     * Reset the app to a new layout
     */
    setRoot(layout: any): Promise<any>;
    /**
     * Set default options to all screens. Useful for declaring a consistent style across the app.
     */
    setDefaultOptions(options: any): void;
    /**
     * Change a component's navigation options
     */
    mergeOptions(componentId: string, options: any): void;
    /**
     * Show a screen as a modal.
     */
    showModal(layout: any): Promise<any>;
    /**
     * Dismiss a modal by componentId. The dismissed modal can be anywhere in the stack.
     */
    dismissModal(componentId: string): Promise<any>;
    /**
     * Dismiss all Modals
     */
    dismissAllModals(): Promise<any>;
    /**
     * Push a new layout into this screen's navigation stack.
     */
    push(componentId: string, layout: any): Promise<any>;
    /**
     * Pop a component from the stack, regardless of it's position.
     */
    pop(componentId: string, params?: any): Promise<any>;
    /**
     * Pop the stack to a given component
     */
    popTo(componentId: string): Promise<any>;
    /**
     * Pop the component's stack to root.
     */
    popToRoot(componentId: string): Promise<any>;
    /**
     * Sets new root component to stack.
     */
    setStackRoot(componentId: string, layout: any): Promise<any>;
    /**
     * Show overlay on top of the entire app
     */
    showOverlay(layout: any): Promise<any>;
    /**
     * dismiss overlay by componentId
     */
    dismissOverlay(componentId: string): Promise<any>;
    /**
     * Resolves arguments passed on launch
     */
    getLaunchArgs(): Promise<any>;
    /**
     * Obtain the events registry instance
     */
    events(): EventsRegistry;
    /**
     * Constants coming from native
     */
    constants(): Promise<any>;
}
