# jQuery.onInfiniteScroll

Callback when you reach the bottom of the page and ajax requests finish. Useful as an infinite scroll callback.

## Example

````javascript
$.onInfiniteScroll(function() {
    // Fetch & append some content
});

$.onInfiniteScroll(function() {
    // Pass an optional offset from the page bottom at which to trigger the callback.
}, { offset: 100 });

// Remove the event listeners.
$.destroyInfiniteScroll();
````

## Contributing

Please fork the project and submit a pull request with tests. Install node modules `npm install` and run tests with `make test`.

## License

MIT