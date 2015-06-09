var falafel = require('../');
var test = require('tape');

test('jsx', function (t) {
    t.plan(1);

    var src = 'React.createClass({ render: function() { return <div>Foo</div>; } });\n';
    var output = falafel(src, { plugins: { jsx: true } }, function (node) {
        if (node.type === 'JSXIdentifier') {
            node.update('span');
        }
    });

    t.equal(output.toString(), 'React.createClass({ render: function() { return <span>Foo</span>; } });\n');
});
