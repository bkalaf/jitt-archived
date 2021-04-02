import { GUID } from './../datatypes/GUID';

export interface ISubscription {
    elementType: 'dropdown' | 'button';
    eventName: 'changed' | 'show' | 'hide';
    scope?: string;
    elementID?: string;
    subscriberID?: GUID;
}

interface TriggerFunction<T extends any[]> {
    (...args: T): void;
    unregister(): void;
}

interface IUnsubscribe {
    (): void;
}
type PublisherOnTrigger = <T extends any[]>(subscription: ISubscription) => TriggerFunction<T>;
export interface IAggregator {
    registerEvent<T extends any[]>(
        handler: (...args: any[]) => void,       
        scope: string,
        elementType: string,
        elementID?: string
    ): void; //TriggerFunction<T>;
    unregisterEvent(subscription: ISubscription): void;
    publish<T extends any[]>(subscription: ISubscription): (...args: T[]) => void;
    subscribe(
        eventName: string,
        elementType: string,
        scope: string,
        elementID: string
    ): IUnsubscribe;
    unsubscribe(subscription: ISubscription): IUnsubscribe;
}

class Aggregator implements IAggregator {
    registerEvent<T extends any[]>(
        handler: (...args: any[]) => void,
        eventName: string,
        elementType: string,
        scope: string,
        elementID?: string
    ): void // TriggerFunction<T> {
        {
        if (!this.hasEventName(eventName)) {
            this.backing.set({ value: eventName}, new WeakMap());
        } 
        if (!this.hasElementIDorScope(eventName, scope) &&  
            !this.hasElementIDorScope(eventName, elementID ?? '')) { 
            const key = elementID ? elementID : scope;
            this.backing.get({ value: eventName })!.set({ value: key }, handler)
            }
        
    }
    unregisterEvent(subscription: ISubscription): void {
        throw new Error('Method not implemented.');
    }
    publish<T extends any[]>(subscription: ISubscription): (...args: T) => void {
        return (...args: T) => {
            const { eventName, elementID, elementType, scope } = subscription;
            const key = elementID ? elementType : scope;
        }
    }
    subscribe(
        eventName: string,
        elementType: string,
        scope: string,
        elementID: string
    ): IUnsubscribe {
        throw new Error('Method not implemented.');
    }
    unsubscribe(subscription: ISubscription): IUnsubscribe {
        throw new Error('Method not implemented.');
    }
    backing: WeakMap<
        object,
        WeakMap<object,  (...args: any[]) => void>> = new WeakMap();
    hasEventName(name: string) {
        return this.backing.has({ value: name });
    }
    hasElementIDorScope(name: string, id: string) {
        return this.hasEventName(name) && this.backing.get({ value: name })?.has({ value: id });
    }
    hasSubscriberID(name: string, id: string, subscriberID: GUID) {
        return (
            this.hasElementIDorScope(name, id) &&
            this.backing.get({ value: name })!.get({ value: id }));
    }
}
