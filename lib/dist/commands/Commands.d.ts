import { CommandsObserver } from '../events/CommandsObserver';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';
export declare class Commands {
    private readonly nativeCommandsSender;
    private readonly layoutTreeParser;
    private readonly layoutTreeCrawler;
    private readonly commandsObserver;
    private readonly uniqueIdProvider;
    constructor(nativeCommandsSender: NativeCommandsSender, layoutTreeParser: any, layoutTreeCrawler: any, commandsObserver: CommandsObserver, uniqueIdProvider: UniqueIdProvider);
    setRoot(simpleApi: any): any;
    setDefaultOptions(options: any): void;
    mergeOptions(componentId: any, options: any): void;
    showModal(simpleApi: any): any;
    dismissModal(componentId: any): any;
    dismissAllModals(): any;
    push(componentId: any, simpleApi: any): any;
    pop(componentId: any, options: any): any;
    popTo(componentId: any): any;
    popToRoot(componentId: any): any;
    setStackRoot(componentId: any, simpleApi: any): any;
    showOverlay(simpleApi: any): any;
    dismissOverlay(componentId: any): any;
    getLaunchArgs(): any;
}
