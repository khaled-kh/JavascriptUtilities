# JavascriptUtilities
Bunch of JS Javascript Utilities

**typecheck.js**

Easily set typed attributes in a class

```javascript
  import './typecheck';

  class Foo
  {
    constructor(text)
    {
        expectString(text,"text");
        this.text = text;
    }
  }

  class Bar
  {
    constructor(foo)
    {
        expectInstance(foo,"foo","Foo");
        this.foo = foo;
    }
  }
  
  new Foo("42");
  new Foo(42); // TypeError: text must be String
  
  new Bar(new Foo("test"));
  new Bar(new Object()); // TypeError: foo must be Object(Foo)
```
