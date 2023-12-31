--TEST--
PDO SQLite Feature Request #42589 (getColumnMeta() should also return table name)
--EXTENSIONS--
pdo
pdo_sqlite
--SKIPIF--
<?php
$db = new PDO("sqlite::memory:");
$options = $db->query('PRAGMA compile_options')->fetchAll(PDO::FETCH_COLUMN);
if(!in_array('ENABLE_COLUMN_METADATA', $options, true))
    die("skip sqlite3 must be compiled with SQLITE_ENABLE_COLUMN_METADATA");
?>
--FILE--
<?php
$db = new PDO("sqlite::memory:");

$db->exec('CREATE TABLE test (field1 VARCHAR(10))');
$db->exec('INSERT INTO test VALUES("test")');

$result = $db->query('SELECT * FROM test t1 LEFT JOIN test t2 ON t1.field1 = t2.field1');
$meta1 = $result->getColumnMeta(0);
$meta2 = $result->getColumnMeta(1);

var_dump(!empty($meta1['table']) && $meta1['table'] == 'test');
var_dump(!empty($meta2['table']) && $meta2['table'] == 'test');
?>
--EXPECT--
bool(true)
bool(true)
