# alt/ea packages

[[toc]]


## What are alt/ea packages?

alt/ea packages are software packages or assemblies of software components developed and distributed by the CloudLinux software provider. 
These packages typically consist of a set of tools, libraries, and utilities that enhance or supplement the functionality of the operating system. 
"alt" and "ea" stand for "alternative" and "easyapache" respectively.

alt-php provides by CloudLinux and it also includes PHP selector feature. These versions help to access outdated PHP version and also these versions are hardened and patched against vulnerabilities.

Right now, you can easily use PHP selector to change PHP version from PHP 5.2 to PHP 8.3. And this option provides by CloudLinux LVE Manager plugin in WHM.

EA PHP versions are provided by EasyApache 4. These PHP versions are included in cPanel installation and can be managed by Multi PHP Manager.

### What are the main goals and purposes of alt/ea packages?

CloudLinux enables two different PHP Management Systems on cPanel systems, both our own MultiPHP Manager, as well as their own "Select PHP Version" Alternative Hardened PHP system.

CloudLinux additionally provides older, End-of-Life versions of ea-php with security patches applied beyond the support provided by cPanel on alternative operating systems.

alt-php includes PHP versions that CloudLinux provides along with their PHP Selector feature. These versions of PHP are often hardened and patched against vulnerabilities to allow users to continue to use applications that require outdated PHP versions.

As of this time, PHP Selector currently offers users the ability to install and use PHP 5.2+ and the options for these versions are managed via CloudLinux's LVE Manager plugin in WHM.

For more details regarding the installation of alt-php and PHP Selector, please refer to [CloudLInux's documentation](https://docs.cloudlinux.com/cloudlinuxos/cloudlinux_os_components/#general-information-and-requirements).

ea-php is the PHP versions that cPanel packages and provides via the EasyApache 4 repositories. These are the standard versions that are included in a base installation of cPanel and are managed via the MultiPHP Manager in both cPanel & WHM interface.

Older versions of ea-php are available on CloudLinux that are otherwise not available on CentOS/Ubuntu/AlmaLinux that have security patches provided by CloudLinux.

Extensions and different versions of ea-php are managed via the [EasyApache 4 interface](https://support.cpanel.net/hc/en-us/articles/360051163134-How-To-Install-a-PHP-Version-in-WHM) in the WHM and settings are managed via [MutliPHP Manager](https://support.cpanel.net/hc/en-us/articles/360052492693).


## Which operating systems are alt/ea packages designed for?

alt/ea packages are designed for Linux operating systems:
- CloudLinux (CentOS, AlmaLinux)
- Ubuntu
- Debian

### Which versions of CloudLinux support these packages?

alt-php: CloudLinux 6, 7, 8, 9 (CentOS 6, 7, 8; AlmaLinux 8, 9)

ea-php: CloudLinux 6, 7, 8, 9 (CentOS 6, 7, 8; AlmaLinux 8, 9)

### Which versions of Ubuntu support these packages?

alt-php: Ubuntu 16, 18, 20, 22

ea-php: no

### Which versions of Debian support these packages?

alt-php: Debian 10, 11, 12

ea-php: no


## What are the main interpreters used for alt/ea packages?

- alt-php

- alt-python

- alt-ruby

- alt-nodejs

## alt-php

### About alt-php

alt-php (also known as "CloudLinux PHP Selector") is a component provided by CloudLinux designed 
for managing PHP versions on web servers and enabling users to choose PHP versions for their websites.

Here are the key features and characteristics of alt-php:

1. Multiple PHP Versions:

alt-php allows the installation and usage of various PHP versions on a single web server. This enables users to select the PHP version that best suits their web applications.

2. User Segmentation:

alt-php allows hosting providers and web server administrators to provide different PHP versions for different users. Each user can choose the PHP version that suits their website.

3. Enhanced Compatibility:

alt-php is designed to ensure maximum compatibility with various web applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of PHP applications.

4. Updates and Support:

CloudLinux provides regular updates for alt-php, including bug fixes, performance improvements, and updates for new PHP versions. This helps ensure the security and currency of PHP usage.

5. Management Tools:

alt-php usually comes with a set of management tools, such as PHP Selector, allowing users to manage PHP versions and enable/disable various PHP extensions.

alt-php provides a more flexible and convenient environment for working with different PHP versions on a single server, which is particularly useful in a web hosting environment where multiple users have varying requirements for PHP versions for their web applications.


### A list of alt-php versions that we support for different operating systems.

::: tip 
The mark `x` stands for a supported version.
:::

#### 1. CloudLinux


|             | Cloudlinux 6 | Cloudlinux 7 | Cloudlinux 8 | Cloudlinux 9 |
|:-----------:|:------------:|:------------:|:------------:|:------------:|
| alt-php 5.2 |       x      |       x      |       x      |       x      |
| alt-php 5.3 |       x      |       x      |       x      |       x      |
| alt-php 5.4 |       x      |       x      |       x      |       x      |
| alt-php 5.5 |       x      |       x      |       x      |       x      |
| alt-php 5.6 |       x      |       x      |       x      |       x      |
| alt-php 7.0 |       x      |       x      |       x      |       x      |
| alt-php 7.1 |       x      |       x      |       x      |       x      |
| alt-php 7.2 |       x      |       x      |       x      |       x      |
| alt-php 7.3 |       x      |       x      |       x      |       x      |
| alt-php 7.4 |       x      |       x      |       x      |       x      |
| alt-php 8.0 |       x      |       x      |       x      |       x      |
| alt-php 8.1 |       x      |       x      |       x      |       x      |
| alt-php 8.2 |       x      |       x      |       x      |       x      |
| alt-php 8.3 |       x      |       x      |       x      |       x      |
| alt-php 8.4 |              |       x      |       x      |       x      |



#### 2. Debian

|             | Debian 10 | Debian 11 | Debian 12 |
|:-----------:|:---------:|:---------:|:---------:|
| alt-php 5.2 |           |           |           |
| alt-php 5.3 |           |           |           |
| alt-php 5.4 |           |           |           |
| alt-php 5.5 |           |           |           |
| alt-php 5.6 |     x     |     x     |     x     |
| alt-php 7.0 |     x     |     x     |     x     |
| alt-php 7.1 |     x     |     x     |     x     |
| alt-php 7.2 |     x     |     x     |     x     |
| alt-php 7.3 |     x     |     x     |     x     |
| alt-php 7.4 |     x     |     x     |     x     |
| alt-php 8.0 |     x     |     x     |     x     |
| alt-php 8.1 |     x     |     x     |     x     |
| alt-php 8.2 |     x     |     x     |     x     |
| alt-php 8.3 |     x     |     x     |     x     |
| alt-php 8.4 |     x     |     x     |     x     |






#### 3. Ubuntu


|             | Ubuntu 16.04 | Ubuntu 18.04 | Ubuntu 20.04 | Ubuntu 22.04 |
|:-----------:|:------------:|:------------:|:------------:|:------------:|
| alt-php 5.2 |              |              |              |              |
| alt-php 5.3 |              |              |              |              |
| alt-php 5.4 |              |              |              |              |
| alt-php 5.5 |              |              |              |              |
| alt-php 5.6 |       x      |       x      |       x      |       x      |
| alt-php 7.0 |       x      |       x      |       x      |       x      |
| alt-php 7.1 |       x      |       x      |       x      |       x      |
| alt-php 7.2 |       x      |       x      |       x      |       x      |
| alt-php 7.3 |       x      |       x      |       x      |       x      |
| alt-php 7.4 |       x      |       x      |       x      |       x      |
| alt-php 8.0 |       x      |       x      |       x      |       x      |
| alt-php 8.1 |       x      |       x      |       x      |       x      |
| alt-php 8.2 |       x      |       x      |       x      |       x      |
| alt-php 8.3 |       x      |       x      |       x      |       x      |
| alt-php 8.4 |              |       x      |       x      |       x      |



### Bundled PHP extensions

PHP extensions are modules that extend the functionality of the PHP programming language. These extensions provide additional capabilities for working with various types of data, performing specific tasks, interacting with external resources and supporting various protocols.

The PHP core includes many built-in extensions that provide basic functionality, such as working with databases, string processing, working with images, and others. However, to support more specific tasks and third-party libraries, you can use additional PHP extensions.

### List of extensions supported by the alt&ea team for each version of PHP

Large number of PHP extensions are bundled with each version of PHP.

* [PHP 5.2 extensions](./#php-5-2-extensions)
* [PHP 5.3 extensions](./#php-5-3-extensions)
* [PHP 5.4 extensions](./#php-5-4-extensions)
* [PHP 5.5 extensions](./#php-5-5-extensions)
* [PHP 5.6 extensions](./#php-5-6-extensions)
* [PHP 7.0 extensions](./#php-7-0-extensions)
* [PHP 7.1 extensions](./#php-7-1-extensions)
* [PHP 7.2 extensions](./#php-7-2-extensions)
* [PHP 7.3 extensions](./#php-7-3-extensions)
* [PHP 7.4 extensions](./#php-7-4-extensions)
* [PHP 8.0 extensions](./#php-8-0-extensions)
* [PHP 8.1 extensions](./#php-8-1-extensions)
* [PHP 8.2 extensions](./#php-8-2-extensions)
* [PHP 8.3 extensions](./#php-8-3-extensions)
* [PHP 8.4 extensions](./#php-8-4-extensions)

#### PHP 5.2 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|Reflection <br>SPL <br>SimpleXML <br>apc <br>apm <br>ares <br>bcmath <br>bcompiler <br>big_int <br>bitset <br>bloomy <br>bz2 <br>bz2_filter <br>calendar <br>coin_acceptor <br>crack <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>enchant <br>exif <br>ffmpeg** | fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip <br>geos <br>gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>huffman <br>iconv <br>idn <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader| json <br>ldap <br>libxml <br>lzf <br>mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>msgpack <br>mssql <br>mysql <br>mysqli <br>ncurses <br>oauth <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird |  <br>pdo_mysql <br>pdo_oci** <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pgsql <br>phar <br>posix <br>pspell <br>quickhash <br>radius <br>rar <br>readline <br>recode <br>redis <br>rsync <br>session <br>shmop <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl_types <br>sqlite <br>ssh2 <br>standard <br>stats <br>stem | stomp <br>suhosin <br>sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>translit <br>uploadprogress <br>uuid <br>wddx <br>xcache <br>xcache_3 <br>xdebug <br>xhprof <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xsl <br>xcache<sup>*</sup> <br>yaf <br>yaz <br>zend_optimizer <br>zip <br>zlib|
</div>

<sup>*</sup> CloudLinux 6

<sup>**</sup> CloudLinux 6/7

#### PHP 5.3 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|amqp<br> apc <br>apcu <br>apm <br>ares <br>bcmath <br>bcompiler <br>big_int <br>bitset <br>bloomy <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>clamav** <br>coin_acceptor <br>core <br>crack <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br> filter <br>ftp | functional <br> gd <br>gender <br>geoip <br> geos <br> gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>huffman <br>iconv <br>idn <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libevent <br>libxml <br>lzf | mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br> pdo_oci* <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pgsql | phalcon* <br>phar <br> posix <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br> solr <br>spl <br>spl_types <br>sqlite <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin | sybase_ct <br>sysvmsg <br> sysvsem <br> sysvshm <br>tidy <br> tideways <br>timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache* <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xsl <br> xhprof <br>yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7

#### PHP 5.4 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|aapm** <br>amqp <br> apc <br>apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>core <br>ctype <br>curl <br>clos_ssa <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>functional <br>gd <br> gender | geoip <br> geos <br>gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring| mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8* <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql <br>phalcon* <br>phar  | posix <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br> solr <br>sourceguardian <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin <br>sybase_ct <br>sysvmsg | sysvsem <br>sysvshm <br>tidy <br> tideways <br> timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache* <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray*** <br>xsl <br> xhprof <br> jsmin <br> yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7

<sup>***</sup> CloudLinux 7/8

#### PHP 5.5 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|aapm** <br>amqp <br> apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>clamav** <br>core <br>ctype <br>curl <br> clos_ssa <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br> diseval <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip | geos <br> gettext <br>gmagick <br>gmp <br>gnupg <br>gRPC <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>jsmin <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt | memcache <br>memcached <br>mhash <br>mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8* <br>odbc <br>opcache* <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql | phalcon* <br>phalcon3 <br>phar <br>posix <br>postal* <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br> solr <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin | sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br> tideways <br>timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray <br>xsl <br> xhprof <br>yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq |
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7


#### PHP 5.6 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|aapm** <br> amqp <br> apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>core <br>ctype <br>curl <br> clos_ssa** <br>date <br>dba <br> dbase <br>dbx <br>dom <br>doublemetaphone <br> diseval <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip <br>gettext | geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>haru <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash | mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8 <br>odbc <br>opcache* <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql <br>phalcon* <br>phalcon3 | phar <br>posix <br> postal** <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br> solr | suhosin <br>sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br>translit <br> tideways <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray <br>xsl <br> xhprof <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7


#### PHP 7.0 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|aapm** <br>amqp <br> apcu <br>bcmath <br>bitset <br>brotli <br>bz2 <br>clos_ssa** <br> calendar <br>core <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dom <br> diseval <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br> gearman <br> gender <br> geos | geoip <br>gettext <br>gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libsodium <br>libxml <br>lzf <br> luasandbox*  <br>mailparse <br>mbstring <br>mcrypt | memcached <br> memcache <br>mongodb <br>mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8* <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br> psr <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pdo_sqlsrv <br> pdo_oci  <br>pgsql <br>phalcon3 <br>phar | posix <br> postal** <br>propro <br>pspell <br> phalcon4 <br>raphf <br>rar <br>readline <br> rrd <br>redis <br>reflection <br> recode <br>session <br>shmop <br>simplexml <br>snmp<br>snuffleupagus <br>soap <br>sockets <br>sourceguardian <br> sodium <br> solr <br>spl <br>sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>suhosin7 <br>sysvmsg | swoole <br> sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>vld** <br>wddx <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br> xray <br>xsl <br>yaml <br>yaz <br> yaf <br>zip <br>zlib <br>zmq|
</div>


<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7

::: tip Note
To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
:::


#### PHP 7.1 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|aapm** <br>amqp <br> snuffleupagus <br> vld <br> apcu <br>bcmath <br>brotli <br>bz2 <br> clos_ssa** <br> calendar <br>core <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dom <br> diseval <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br>gearman <br>gender <br>geoip <br>gettext | geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br> json <br>ldap <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt <br>memcached | memcache <br> mongodb <br>mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8 <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql psr <br> <br>pdo_sqlite <br>pdo_sqlsrv <br>pgsql <br>phalcon3 <br>phar <br> pdf | pdo_oci <br> phalcon4 <br> posix <br>propro <br>pspell <br>psr** <br>raphf <br>rar <br>readline <br>redis <br>reflection <br>rrd <br> recode <br> solr <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl <br> sodium <br> sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>suhosin7 <br>sysvmsg | swoole <br> sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>wddx <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xsl <br>xray <br> yaz <br> yaml <br> yaf <br>zip <br>zlib <br>zmq|
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7


::: tip Note
To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
:::

#### PHP 7.2 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|aapm** <br> jsmin <br> psr <br> rrd <br> yaz <br> amqp <br> snuffleupagus <br> vld <br> apcu <br>bcmath <br>brotli <br>bz2 <br>calendar <br> clos_ssa** <br> core <br>ctype <br>curl <br>date <br>dba <br>dom <br> dbase <br> diseval  <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br>gender <br>geoip <br>gettext | gearman <br> geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>json <br>ldap <br>libxml <br>lzf <br> luasandbox* <br> mcrypt <br> memcache <br> mailparse <br>mbstring <br>memcached <br>mongodb | mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8 <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdo <br>pdo_dblib <br>pdo_firebird <br> pdf <br> pdo_oci <br> phalcon4  <br> pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pdo_sqlsrv <br>pgsql <br>phalcon3 <br>phar | posix <br>propro <br>pspell <br>raphf <br>readline <br>redis <br>reflection <br> recode <br> sodium <br> sourceguardian <br> swoole  <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>spl <br>sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>sysvmsg <br>sysvsem | sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>wddx <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xsl <br> xdebug <br> yaf <br>yaml <br>zip <br>zlib <br>zmq <br> xray|
</div>

::: tip Note 
To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
:::


<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7


#### PHP 7.3 extensions


<div class="notranslate">

| |  |  |  | | |
|-|-|-|-|-|-|
|ffmpeg* <br> aapm** <br>amqp <br> clos_ssa** <br> gearman <br> jsmin <br> mailparse <br> memcache <br> psr <br> rrd <br> solr <br> tideways_xhprof <br> zmq <br> snuffleupagus <br> vld <br> apcu <br> bz2 <br> brotli <br> calendar <br> core <br> ctype <br> curl <br> date <br> exif <br>enchant <br> filter <br> ftp <br> gettext <br> gmp <br>gnupg <br> hash <br> iconv <br> interbase <br> luasandbox* | libxml <br>mysqlnd <br>opcache <br> openssl <br> pcntl <br> pcre <br>pdo_pgsql <br> phar <br> readline <br> reflection <br> session <br> shmop <br> simplexml <br> sourceguardian <br> spl <br> sqlite3 <br>standard <br> snmp <br> stats <br> tokenizer | trader <br>xmlreader <br>bcmath <br>fileinfo <br> grpc <br>intl <br>lzf <br>nd_mysqli <br>pdf <br>pdo <br>posix <br>swoole <br>uploadprogress <br>xmlrpc <br>gd <br>http <br>ioncube_loader <br> mbstring | nd_pdo_mysql <br>pdo_dblib <br>pdo_sqlite <br>propro <br>soap <br>sysvmsg <br>uuid <br>xmlwriter <br>dbase <br>gender <br>igbinary <br>mcrypt <br>newrelic <br> pdo_firebird <br>pdo_sqlsrv <br>pspell <br>sockets <br>sysvsem <br>vips* <br>xsl | dba <br>geoip <br>imagick <br>json <br>memcached <br>oauth <br>pdo_mysql <br>pgsql <br> raphf <br>sodium <br>sysvshm <br>yaml <br>dom <br>geos <br>imap <br>ldap <br>mongodb <br>oci8 <br>pdo_oci | phalcon3 <br>recode <br>sqlsrv <br> tidy <br>wddx <br>yaz <br>eio <br>gmagick <br>inotify <br>leveldb <br>mysqli <br>odbc <br>pdo_odbc <br>phalcon4 <br>redis <br>ssh2 <br>timezonedb <br>xdebug <br>zip <br> xml <br> zlib <br> xray <br> yaf| 

</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7

:::tip Note
To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
:::

#### PHP 7.4 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|leveldb <br> sourceguardian <br> ffmpeg* <br> amqp <br> clos_ssa** <br> gearman <br> ioncube_ loader <br> jsmin <br> mailparse <br> mcrypt <br> memcache <br> psr <br> rrd <br> solr <br> ssh2 <br> tideways_xhprof <br> yaz <br> zmq <br> apcu <br> bcmath <br> brotli <br> bz2 <br> calendar <br> core <br> ctype <br> curl <br> date <br> dba <br> dbase <br> dom <br> eio <br> enchant <br> exif <br> fileinfo <br> filter <br> ftp <br> gd <br> gender <br> geoip <br> geos | gettext <br> gmagick <br> gmp <br> gnupg <br> grpc <br> hash <br> http <br> iconv <br> igbinary <br> imagick <br> imap <br> inotify <br> intl <br> json <br> ldap <br> libxml <br> luasandbox* <br> lzf <br> mbstring <br> memcached <br> mongodb | mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> newrelic <br> snuffleupagus <br> oauth <br> oci8 <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql <br> pdo_oci <br> pdo_odbc <br> pdo_pgsql <br> vld <br> pdo_sqlite <br> pdo_sqlsrv | pgsql <br> phalcon4 <br> phar <br> posix <br> propro <br> pspell <br> raphf <br> readline <br> redis <br> reflection <br>phalcon5 <br> session <br> shmop <br> simplexml <br> snmp <br> soap <br> sockets <br> sodium <br> spl <br> sqlite3 <br> sqlsrv <br> standard | stats <br> swoole <br> sysvmsg <br> sysvsem <br> sysvshm <br> tidy <br> timezonedb <br> tokenizer <br> trader <br> xray <br> uploadprogress <br> uuid <br> vips* <br> xdebug <br> xml <br> xmlreader <br> xmlrpc <br> xmlwriter <br> xsl <br> yaml <br> zip <br> zlib |
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7

#### PHP 8.0 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|brotli <br> amqp <br> clos_ssa*** <br> core <br> date <br> filter <br> gearman <br> geoip <br> gmagick <br> gnupg*** <br> grpc <br> apcu <br> bcmath <br> bz2 <br> calendar <br> ctype <br> curl <br> dba <br> dbase <br> dom <br> enchant <br> exif <br> ffi** <br> fileinfo | hash <br> igbinary <br> inotify <br> jsmin <br> json <br> libxml <br> mcrypt <br> memcache ftp <br> gd <br> gettext <br> gmp <br> iconv <br> imagick <br> imap <br> intl <br> ldap <br> lzf <br> mailparse <br> mbstring | mongodb <br> newrelic <br> oauth <br> oci8 <br> openssl <br> pcntl <br> pcre <br> pdo_oci <br> pdo_sqlsrv <br> readline <br> redis <br> reflection <br> rrd <br> session memcached <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> odbc <br> opcache <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql <br> pdo_odbc | snuffleupagus <br> solr <br> SPL <br> sqlsrv <br> ssh2 <br> standard <br> swoole <br> tideways_xhprof <br> trader pdo_pgsql <br> pdo_sqlite <br> pgsql <br> phar <br> posix <br> pspell <br> psr <br> raphf <br> shmop <br> simplexml <br> snmp <br> soap <br> sockets | uploadprogress <br> uuid <br> vips* <br> vld <br> xdebug <br> xmlrpc** <br> yaml <br> yaz <br> zip <br> zlib sodium <br> sqlite3 <br> sysvmsg <br> sysvsem <br> sysvshm <br> tidy <br> timezonedb <br> tokenizer <br> xml <br> xmlreader <br> xmlwriter <br> xsl <br> zmq <br>sourceguardian <br> phalcon5 <br> xray |
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7/8

<sup>***</sup> CloudLinux 7

#### PHP 8.1 extensions


<div class="notranslate">

| |  |  |  | |
|-|-|-|-|-|
|amqp <br> apcu <br> bcmath <br> brotli <br> bz2 <br> calendar <br> clos_ssa*** <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase <br> dom <br> enchant <br> exif <br> ffi** <br> fileinfo <br> filter <br> ftp | gd <br> geoip <br> gearman <br> gettext <br> gmagick <br> gmp <br> gnupg** <br> grpc <br> hash <br> ioncube_loader <br> iconv <br> igbinary <br> imagick <br> imap <br> inotify <br> intl <br> jsmin <br> json <br> ldap <br> libxml <br> lzf <br> mailparse <br> mbstring <br> mcrypt | memcache <br> memcached <br> mongodb <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> newrelic <br> oauth <br> oci8 <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre <br> pdf <br> pdo <br> pdo_dblib <br> pdo_mysql <br> pdo_oci <br> pdo_odbc <br> phalcon5 <br> pdo_pgsql <br> pdo_firebird <br> pdo_sqlite <br> pdo_sqlsr | pgsql <br> phar <br> posix <br> process <br> pspell <br> psr <br> rrd <br> raphf <br> readline <br> redis <br> Reflection <br> session <br> shmop <br> SimpleXML v snmp <br> solr <br> sourceguardian <br> soap <br> sockets <br> sodium <br> SPL <br> sqlite3 <br> sqlsrv <br> ssh2 <br> standard <br> swoole | sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof <br> tidy <br> timezonedb <br> tokenizer <br> trader <br> uploadprogress <br> uuid <br> vips* <br> xdebug <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaf <br> yaml <br> zip <br> zlib <br> zmq <br> xray |
</div>

<sup>*</sup> CloudLinux 6/7

<sup>**</sup> CloudLinux 7/8

<sup>***</sup> CloudLinux 7



#### PHP 8.2 extensions


| | | | | |
|-|-|-|-|-|
|amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> swoole** <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> vips* <br> xdebug** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|


<sup>*</sup> CloudLinux 7

<sup>**</sup> CloudLinux 7/8

#### PHP 8.3 extensions


| | | | | |
|-|-|-|-|-|
|amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> elastic_apm <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phalcon5 <br> phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> snuffleupagus <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|


<sup>*</sup> CloudLinux 7

<sup>**</sup> CloudLinux 7/8 

#### PHP 8.4 extensions


| | | | | |
|-|-|-|-|-|
|amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> elastic_apm <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phalcon5 <br> phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> snuffleupagus <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|


<sup>*</sup> CloudLinux 7

<sup>**</sup> CloudLinux 7/8


## How do I install alt-php?

### What commands should I use to install alt-php on CloudLinux and Ubuntu?

Installation occurs using package management tools such as "YUM" for CentOS/RHEL-based systems or "APT-GET" for Ubuntu-based systems. Here are the general steps for installing alt-php:

#### For CentOS/RHEL-based Systems (Using YUM):

Each version of PHP individually or all versions at once can be installed.

Standard commands to install each version separately can be used. For example, installing alt-php73:

<div class="notranslate">

```
yum install alt-php73*
```
</div>

To install all versions at the same time, use group:

<div class="notranslate">

```
yum groupinstall alt-php
```
</div>

To find out which groups are available for installation, use the following command:

<div class="notranslate">

```
sudo yum group list
```
</div>

Example:

<div class="notranslate">

```
sudo yum group list 
............ 

Available Environment Groups:
   Server with GUI
   Server
   Minimal Install
   CloudLinux OS Admin (minimal)
   CloudLinux OS Solo (minimal)
   Workstation
   Custom Operating System
   Virtualization Host
Available Groups:
   alt-nodejs
   alt-nodejs10
   alt-nodejs11
   alt-nodejs12
   alt-nodejs14
   alt-nodejs6
   alt-nodejs8
   alt-nodejs9
   alt-php
   alt-php44
   alt-php51
   alt-php52
 ..................
   alt-ruby30
   alt-ruby31
   alt-ruby32
```
</div>

To get a list of packages of a specific group, use the following command:

<div class="notranslate">

```
sudo yum groupinfo alt-phpXY
```
</div>

"XY" - version of alt-php

For example:

<div class="notranslate">

```
sudo yum groupinfo alt-php72 
............ 

Group: alt-php72
 Description: PHP 7.2.x packages for CloudLinux OS PHP Selector
 Default Packages:
   alt-php72
   alt-php72-bcmath
   alt-php72-brotli
   alt-php72-cli
   alt-php72-common
   alt-php72-dba
   alt-php72-devel
  ................
   alt-php72-xml
   alt-php72-xmlrpc
```
</div>

#### For Debian-based Systems (Using APT-GET):

Each version of PHP individually or all versions at once can be installed.

Standard commands to install each version separately can be used. For example, installing alt-php73:

<div class="notranslate">

```
apt-get install alt-php73*
```
</div>

To install all versions at the same time, it is necessary to use the alt-php meta-package:

<div class="notranslate">

```
apt-get install alt-php
```
</div>

To find out which meta-packages are available for installation, use the following command:

<div class="notranslate">

```
apt list -a | grep alt-php
```
</div>

For example:

<div class="notranslate">

```
apt list -a | grep alt-php 
............
alt-php-config/unknown 1-51.1 amd64
alt-php-internal-bcmath/unknown 7.4.33-13.1 amd64
alt-php-internal-bcmath/unknown 7.4.13-3 amd64
alt-php-internal-cli/unknown,now 7.4.33-13.1 amd64 [installed,automatic]
alt-php-internal-cli/unknown 7.4.13-3 amd64
alt-php-internal-common/unknown,now 7.4.33-13.1 amd64 [installed,automatic]
alt-php-internal-common/unknown 7.4.13-3 amd64
.........
alt-php83-soap/unknown 8.3.0rc3-1 amd64
alt-php83-sodium/unknown 8.3.0rc3-1 amd64
alt-php83-tidy/unknown 8.3.0rc3-1 amd64
alt-php83-xml/unknown 8.3.0rc3-1 amd64
alt-php83/unknown 8.3.0rc3-1 amd64
alt-php/unknown 1-5 all
```
</div>

To get a list of packages of a specific meta-package, use the following command:

<div class="notranslate">

```
apt-cache showpkg alt-phpXY
```
</div>

"XY" - version of alt-php

For example:

<div class="notranslate">

```
apt-cache showpkg alt-php72
............
Dependencies:
7.2.34-34 - alt-php72-cli (5 7.2.34-34) alt-php72-common (5 7.2.34-34) libcurl4-openssl-dev (0 (null)) libreadline-dev (0 (null)) libwebp-dev (0 (null))
7.2.34-33 - alt-php72-cli (5 7.2.34-33) alt-php72-common (5 7.2.34-33) libcurl4-openssl-dev (0 (null)) libreadline-dev (0 (null)) libwebp-dev (0 (null))
7.2.34-19.2 - alt-pcre (0 (null)) alt-php72-cli (5 7.2.34-19.2) alt-php72-common (5 7.2.34-19.2) alt-php-config (2 1-45) alt-sqlite (0 (null)) libcurl4-openssl-dev (0 (null)) libreadline-dev (0 (null)) libwebp-dev (0 (null)) libxml2 (0 (null))
```
</div>

::: tip Important!
When executing the `apt` command, a warning may appear:

<div class="notranslate">

```
WARNING: apt does not have a stable CLI interface. Use with caution in scripts.
```
</div>

The `apt` commandline is designed as an end-user tool and it may change behavior between versions. 
While it tries not to break backward compatibility this is not guaranteed either if a change seems beneficial for interactive use.
All features of `apt` are available in dedicated APT tools like `apt-get` and `apt-cache` as well. 
`apt` just changes the default value of some options. Therefore, we recommend using these commands (potentially with some additional options enabled) as they keep backward compatibility as much as possible.
:::

### How can I check which versions of PHP are already installed?

The method for checking which versions of PHP are installed can vary depending on your operating system. Below are instructions for common operating systems:

#### For CentOS/RHEL:

You can use the `yum list` command to list installed PHP packages. Open a terminal and run:

<div class="notranslate">

```
sudo yum list installed | grep php
```
</div>

This will display a list of installed PHP packages along with their versions.

For example (CL 8 after installing alt-php73):

<div class="notranslate">

```
sudo yum list installed | grep php 
............
alt-php-config.noarch                       1-54.el8                                               @cloudlinux-updates-testing
alt-php-internal.x86_64                     7.4.33-6.el8                                           @cloudlinux-updates-testing
alt-php-internal-cli.x86_64                 7.4.33-6.el8                                           @cloudlinux-updates-testing
alt-php-internal-common.x86_64              7.4.33-6.el8                                           @cloudlinux-updates-testing
alt-php-internal-intl.x86_64                7.4.33-6.el8                                           @cloudlinux-updates-testing
alt-php-internal-mbstring.x86_64            7.4.33-6.el8                                           @cloudlinux-updates-testing
alt-php-libc-client11.x86_64                2007f-3.el8                                            @cloudlinux-updates-testing
alt-php-ssa.x86_64                          0.4-3.el8                                              @AppStream

alt-php73.x86_64                            1:7.3.33-18.el8                                        @cloudlinux-updates-testing
alt-php73-apm-agent.x86_64                  1.9.0-1.el8                                            @cloudlinux-updates-testing
alt-php73-bcmath.x86_64                     1:7.3.33-18.el8                                        @cloudlinux-updates-testing
alt-php73-bcmath-debuginfo.x86_64           1:7.3.31-2.el8                                         @cloudlinux-updates-testing
alt-php73-brotli.x86_64                     0.5.0-2.el8                                            @cloudlinux-x86_64-server-8
.....................
alt-php73-xmlrpc-debuginfo.x86_64           1:7.3.31-2.el8                                         @cloudlinux-updates-testing
```
</div>

#### For Ubuntu/Debian:

On Ubuntu and Debian, you can use the `dpkg` command to list installed PHP packages. Open a terminal and run:

<div class="notranslate">

```
dpkg -l | grep php
```
</div>

This will show a list of installed PHP packages along with their versions.

For example (Ubuntu 20.04 after installing alt-php73):

<div class="notranslate">

```
dpkg -l | grep php  
............
ii  alt-php-internal-cli                  7.4.33-13.1                       amd64        command-line interpreter for the PHP scripting language
ii  alt-php-internal-common               7.4.33-13.1                       amd64        documentation, examples and common module for PHP
ii  alt-php-internal-intl                 7.4.33-13.1                       amd64        Internationalisation module for PHP
ii  alt-php-internal-mbstring             7.4.33-13.1                       amd64        MBSTRING module for PHP
ii  alt-php-libc-client                   2007f-1                           amd64        Provides a common API for accessing mailboxes.
ii  alt-php73                             7.3.33-19                         amd64        server-side, HTML-embedded scripting language (metapackage)
ii  alt-php73-bcmath                      7.3.33-19                         amd64        Bcmath module for PHP
ii  alt-php73-cli                         7.3.33-19                         amd64        command-line interpreter for the PHP scripting language
ii  alt-php73-common                      7.3.33-19                         amd64        documentation, examples and common module for PHP
ii  alt-php73-dba                         7.3.33-19                         amd64        DBA module for PHP
ii  alt-php73-dev                         7.3.33-19                         amd64        Files for PHP7.0 module development
ii  alt-php73-enchant                     7.3.33-19                         amd64        Enchant module for PHP
ii  alt-php73-firebird                    7.3.33-19                         amd64        firebird module for PHP
......................
ii  alt-php73-xmlrpc                      7.3.33-19                         amd64        XMLRPC-EPI module for PHP
```
</div>


### How do I find out what dependencies alt packages have?

Dependencies for a successful installation of alt packages may vary depending on the specific packages and their versions. However, typically, 
the system automatically manages dependencies and provides the necessary packages when installing selected components. Here are general recommendations for finding dependencies:

#### For CentOS/RHEL-based Systems (Using YUM):

Use the command `sudo yum deplist alt-phpXY` (XY is a version of PHP) to view dependencies for a specific package.

For example:

<div class="notranslate">

```
sudo yum deplist alt-php73  
............
package: alt-php73-1:7.3.15-1.2.el8.x86_64
  dependency: /bin/sh
   provider: bash-4.4.20-4.el8_6.x86_64
  dependency: alt-libcurl
   provider: alt-libcurl-7.64.0-2.el8.x86_64
  dependency: alt-libxml2
   provider: alt-libxml2-2.10.2-3.el8.x86_64
..................
package: alt-php73-1:7.3.15-2.2.el8.x86_64
  dependency: /bin/sh
   provider: bash-4.4.20-4.el8_6.x86_64
  dependency: alt-libcurl
   provider: alt-libcurl-7.64.0-2.el8.x86_64
..................
```
</div>

#### For Debian-based Systems (Using APT):

Use the command `sudo apt-cache depends alt-phpXY` (XY is a version of PHP) to view dependencies for a specific package.

For example:

<div class="notranslate">

```
sudo apt-cache depends alt-php74  
............
alt-php74
  Depends: alt-php74-cli
  Depends: alt-php74-common
  Depends: libreadline-dev
  Depends: libwebp-dev
```
</div>

During the installation process, the package manager, such as YUM or APT, 
automatically handles dependencies, and you will usually see a list of packages that will be installed, 
modified, or removed to satisfy dependency requirements.

If there are issues with dependencies, it can often be resolved by manually installing the missing packages. 
It's important to pay attention to any error messages provided by the system and follow the suggested instructions.


## How do I check the current version of alt-php packages?

To check the current version of alt-php packages, you can use the following commands depending on the operating system you are using.

#### For CentOS/RHEL (Using YUM):

<div class="notranslate">

```
sudo yum list installed | grep alt-package-name
```
</div>

Replace "alt-package-name" with the specific name of the package.

For example:

<div class="notranslate">

```
sudo yum list installed | grep alt-php73-firebird  
............
alt-php73-firebird.x86_64                   1:7.3.33-18.el8                                        @cloudlinux-updates-testing
alt-php73-firebird-debuginfo.x86_64         1:7.3.31-2.el8                                         @cloudlinux-updates-testing
```
</div>

#### For Ubuntu (Using APT):

<div class="notranslate">

```
dpkg -l | grep alt-package-name
```
</div>

Replace "alt-package-name" with the specific name of the package.

For example:

<div class="notranslate">

```
dpkg -l | grep alt-php73-firebird  
............ 

ii  alt-php73-firebird                    7.3.33-19                         amd64        firebird module for PHP
```
</div>

These commands will show information about the currently installed version of the package.


## How do I update alt-php?

To update alt-php, you typically follow a process that involves using the package management tools provided by CloudLinux.  
Below are general steps to update alt-php:

#### For CentOS/RHEL-based Systems (Using YUM):

1. Check for Updates:

<div class="notranslate">

```
sudo yum check-update
```
</div>

Example:

<div class="notranslate">

```
sudo yum check-update  
............ 

kernel.x86_64                                    1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
kernel-core.x86_64                               1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
kernel-modules.x86_64                            1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
kernel-tools.x86_64                              1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
kernel-tools-libs.x86_64                         1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
python3-perf.x86_64                              1:4.18.0-513.9.1.lve.el8                    cloudlinux-x86_64-server-8
Obsoleting Packages
alt-python-cllib.x86_64                          2.0.8-3.el8.cloudlinux                      cloudlinux-updates-testing
    alt-python27-cllib.x86_64                    3.3.9-1.el8.cloudlinux                      @cloudlinux-updates-testing
```
</div>

2. Update All Packages, Including alt-php:
    
Updating all groups whose names start with "alt-php":

<div class="notranslate">

```
sudo yum update alt-php*
```
</div>

Updating a group named "alt-php":

<div class="notranslate">

```
sudo yum groupupdate alt-php
```
</div>

You can specify a group with a specific version of alt-php:

<div class="notranslate">

```
sudo yum groupupdate alt-phpXY
```
</div>

"XY" - version of alt-php

For example:

<div class="notranslate">

```
sudo yum groupupdate alt-php74  
............ 

Dependencies resolved.
========================================================================================================================
 Package                           Architecture    Version                    Repository                           Size
========================================================================================================================
Installing group/module packages:
 alt-php74                         x86_64          7.4.33-13.el8              cloudlinux-updates-testing           24 k
 alt-php74-bcmath                  x86_64          7.4.33-13.el8              cloudlinux-updates-testing           34 k
 alt-php74-brotli                  x86_64          0.5.0-2.el8                cloudlinux-x86_64-server-8          293 k
 alt-php74-cli                     x86_64          7.4.33-13.el8              cloudlinux-updates-testing          9.3 M
 alt-php74-common                  x86_64          7.4.33-13.el8              cloudlinux-updates-testing          480 k
 .....................
  libdav1d                          x86_64          0.5.2-1.el8                cloudlinux-updates-testing          346 k
 svt-av1-libs                      x86_64          0.8.7-1.el8                cloudlinux-updates-testing          4.7 M
Installing Groups:
 alt-php74

Transaction Summary
========================================================================================================================
Install  53 Packages

Total download size: 38 M
Installed size: 139 M
Is this ok [y/N]:
```
</div>

#### For Debian-based Systems (Using APT):

1. Update the Package Lists:

<div class="notranslate">

```
sudo apt-get update
```
</div>

Then get a list of possible updates:

<div class="notranslate">

```
apt list --upgradable
```
</div>

Example:

<div class="notranslate">

```
sudo apt-get update  
............  

Get:1 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
Hit:2 http://us.archive.ubuntu.com/ubuntu focal InRelease
Get:3 http://us.archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
Hit:4 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux/stable/20.04 focal InRelease
Hit:5 http://us.archive.ubuntu.com/ubuntu focal-backports InRelease
Get:6 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux/testing/20.04 focal InRelease [1,168 B]
Hit:7 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux-ea4/stable/20.04 focal InRelease
Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2,604 kB]
Hit:9 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux-ea4/testing/20.04 focal InRelease
Get:10 http://us.archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2,994 kB]
Get:11 http://security.ubuntu.com/ubuntu focal-security/main i386 Packages [680 kB]
Get:12 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [914 kB]
Get:13 http://us.archive.ubuntu.com/ubuntu focal-updates/main i386 Packages [913 kB]
Get:14 http://security.ubuntu.com/ubuntu focal-security/universe i386 Packages [633 kB]
Get:15 http://us.archive.ubuntu.com/ubuntu focal-updates/universe i386 Packages [761 kB]
Get:16 http://us.archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1,139 kB]
Get:17 https://repo.cloudlinux.com/cloudlinux-ubuntu/cloudlinux/testing/20.04 focal/main amd64 Packages [84.8 kB]
Fetched 11.0 MB in 5s (2,182 kB/s)
Reading package lists... Done

apt list --upgradable  
 
............
Listing... Done
alt-python27-cllib/unknown 3.3.9-1 amd64 [upgradable from: 3.3.8-1]
curl/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
libcurl3-gnutls/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
libcurl4-openssl-dev/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
libcurl4/focal-updates,focal-security 7.68.0-1ubuntu2.21 amd64 [upgradable from: 7.68.0-1ubuntu2.20]
librados2/focal-updates 15.2.17-0ubuntu0.20.04.5 amd64 [upgradable from: 15.2.17-0ubuntu0.20.04.4]
librbd1/focal-updates 15.2.17-0ubuntu0.20.04.5 amd64 [upgradable from: 15.2.17-0ubuntu0.20.04.4]
mod-hostinglimits/unknown 1.0-41 amd64 [upgradable from: 1.0-40]
```
</div>

2. Upgrade Alt-PHP:

Updating all groups whose names start with "alt-php":

<div class="notranslate">

```
sudo apt-get upgrade alt-php*
```
</div>

Updating a group named "alt-php":

<div class="notranslate">

```
sudo apt-get upgrade alt-php
```
</div>

You can specify a group with a specific version of alt-php:

<div class="notranslate">

```
sudo apt-get upgrade alt-phpXY
```
</div>

"XY" - version of alt-php

For example:

<div class="notranslate">

```
sudo apt-get upgrade alt-php83  
............
Reading package lists... Done
Building dependency tree
Reading state information... Done
Calculating upgrade... Done
The following NEW packages will be installed:
  alt-php83 alt-php83-cli alt-php83-common
The following packages will be upgraded:
  alt-python27-cllib curl libcurl3-gnutls libcurl4 libcurl4-openssl-dev libpq5 librados2 librbd1 mod-hostinglimits
9 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 12.3 MB of archives.
After this operation, 44.7 MB of additional disk space will be used.
Do you want to continue? [Y/n]
```
</div>


## What commands should I use to search for packages in repositories?

#### For CentOS/RHEL (using YUM):

Search for a package:

<div class="notranslate">

```
sudo yum search alt-package-name
```
</div>

For example:

<div class="notranslate">

```
sudo yum search alt-php73-firebird  
............ 

========================================================= Name Exactly Matched: alt-php73-firebird =========================================================
alt-php73-firebird.x86_64 : Firebird and Interbase extensions
======================================================== Name & Summary Matched: alt-php73-firebird ========================================================
alt-php73-firebird-debuginfo.x86_64 : Debug information for package alt-php73-firebird
```
</div>

#### For Ubuntu (using APT):

Search for a package:

<div class="notranslate">

```
sudo apt search alt-package-name
```
</div>

For example:

<div class="notranslate">

```
sudo apt search alt-php73-firebird  
............ 

Sorting... Done
Full Text Search... Done
alt-php73-firebird/unknown,now 7.3.33-19 amd64 [installed]
  firebird module for PHP
```
</div>

When using these commands, replace "alt-package-name" with the specific name of the package you are looking for or want to install.


## How to use alt-php

When you deploy an updated version of PHP, using your system’s regular update tool (yum, dnf, apt), 
the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. 
Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.

### The bin files:

<div class="notranslate">

```
[root@localhost ~]# ll /opt/alt/phpXY/usr/bin/
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
```
</div>

### Modules and pecl extensions:

<div class="notranslate">

```
ls /opt/alt/phpXY/usr/lib64/php/modules/  

ZendGuardLoader.so  imagick.so         oci8.so          stem.so
amqp.so             imap.so            odbc.so          stomp.so
apc.so              inclued.so         opcache.so       suhosin.so
apcu.so             inotify.so         pdf.so           sybase_ct.so
apm.so              interbase.so       pdo.so           sysvmsg.so
ares.so             intl.so            pdo_dblib.so     sysvsem.so
bcmath.so           ioncube_loader.so  pdo_firebird.so  sysvshm.so
big_int.so          ixed.5.4.lin       pdo_mysql.so     tideways.so
bitset.so           jsmin.so           pdo_oci.so       tidy.so
brotli.so           json.so            pdo_odbc.so      timezonedb.so
bz2_filter.so       ldap.so            pdo_pgsql.so     trader.so
dba.so              libevent.so        pdo_sqlite.so    translit.so
dbase.so            libsodium.so       pgsql.so         uploadprogress.so
dbx.so              luasandbox.so      phalcon.so       uri_template.so
dom.so              lzf.so             phar.so          uuid.so
doublemetaphone.so  mailparse.so       posix.so         wddx.so
eaccelerator.so     mbstring.so        propro.so        weakref.so
eio.so              mcrypt.so          pspell.so        xcache.so
enchant.so          memcache.so        quickhash.so     xcache_3.so
fileinfo.so         memcached.so       radius.so        xdebug.so
functional.so       mongo.so           raphf.so         xhprof.so
gd.so               mongodb.so         rar.so           xmlreader.so
gender.so           msgpack.so         recode.so        xmlrpc.so
geoip.so            mssql.so           redis.so         xmlwriter.so
geos.so             mysql.so           rsync.so         xrange.so
gmagick.so          mysqli.so          snmp.so          xsl.so
gnupg.so            mysqlnd.so         soap.so          yaf.so
haru.so             ncurses.so         sockets.so       yaml.so
hidef.so            nd_mysql.so        solr.so          yaz.so
htscanner.so        nd_mysqli.so       spl_types.so     zip.so
http.so             nd_pdo_mysql.so    ssh2.so          zmq.so
igbinary.so         oauth.so           stats.so
```
</div>

### Running code on a specific version through the CLI:

<div class="notranslate">

```
[root@localhost ~]# /opt/alt/phpXY/usr/bin/php helloworld.php
Hello, World!
```
</div>

### Location of ini config files:

<div class="notranslate">

```
[root@localhost ~]# ls /opt/alt/phpXY/etc/php.d.all/
40-leveldb.ini        mailparse.ini     redis.ini
40-snuffleupagus.ini  mbstring.ini      rrd.ini
40-vld.ini            mcrypt.ini        snmp.ini
amqp.ini              memcache.ini      snuffleupagus-default.rules
apcu.ini              memcached.ini     soap.ini
bcmath.ini            mongodb.ini       sockets.ini
dba.ini               mysqli.ini        sodium.ini
dbase.ini             mysqlnd.ini       solr.ini
dom.ini               nd_mysqli.ini     sourceguardian.ini
eio.ini               nd_pdo_mysql.ini  sqlsrv.ini
enchant.ini           newrelic.ini      ssh2.ini
ffmpeg.ini            oauth.ini         stats.ini
fileinfo.ini          oci8.ini          swoole.ini
gd.ini                odbc.ini          sysvmsg.ini
gearman.ini           opcache.ini       sysvsem.ini
gender.ini            pdf.ini           sysvshm.ini
geoip.ini             pdo.ini           tideways_xhprof.ini
geos.ini              pdo_dblib.ini     tidy.ini
gmagick.ini           pdo_firebird.ini  timezonedb.ini
gnupg.ini             pdo_mysql.ini     trader.ini
grpc.ini              pdo_oci.ini       uploadprogress.ini
http.ini              pdo_odbc.ini      uuid.ini
igbinary.ini          pdo_pgsql.ini     vips.ini
imagick.ini           pdo_sqlite.ini    xdebug.ini
imap.ini              pdo_sqlsrv.ini    xmlreader.ini
inotify.ini           pgsql.ini         xmlrpc.ini
intl.ini              phalcon4.ini      xmlwriter.ini
ioncube_loader.ini    phar.ini          xsl.ini
jsmin.ini             posix.ini         yaml.ini
json.ini              propro.ini        yaz.ini
ldap.ini              pspell.ini        zip.ini
luasandbox.ini        psr.ini           zmq.ini
lzf.ini               raphf.ini
```
</div>

### Location of default.ini:

<div class="notranslate">

```
ls /opt/alt/phpXY/etc/php.d/default.ini
```
</div>

### Listing enabled modules on a specific version:

<div class="notranslate">

```
[root@localhost ~]# /opt/alt/php73/usr/bin/php -m
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib

[Zend Modules]
```
</div>

### Enabling a module through the CLI:

<div class="notranslate">

```
[root@localhost ~]# /opt/alt/php73/usr/bin/php -d "extension=igbinary.so" -m
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
igbinary
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib

[Zend Modules]
```
</div>

As you can see, each version is entirely self-contained, 
and changing configurations in one will not impact the others, 
a desired feature in hosting environments.

### Additional configurations (optional)

The **default.ini** file is important for configuring alt-php. It sets default PHP settings and can be used to enable default extensions. We do not modify this file on our side. You need to update **default.ini** yourself to adjust PHP settings based on your Endless Lifecycle Support (ELS) usage and specific requirements.

#### Enabling a module through `default.ini`

To enable or disable extensions in your installed PHP version:

1. Open the `default.ini` file, usually located in the PHP configuration directory, in an editor of your choice: 

   <div class="notranslate">

   ```
   /opt/alt/phpXY/etc/php.d/default.ini
   ```

   </div>

2. Edit the list of extensions:
   * To enable an extension, remove the semicolon `;` at the beginning of the line.
   * To disable an extension, add a semicolon `;` at the beginning of the line.
   * If the extension line is missing, add it in this format: `extension=extension_name.so` (replace `extension_name.so` with the actual extension name).

3. Save the changes in the `default.ini` file.

#### Enabling a module through the configuration files

PHP extensions can also be enabled or disabled through their `.ini` configuration files. This method allows you to control which extensions are active for a specific PHP version or setup. If you're unsure which file to modify to enable a specific extension, start by checking the extension's own `.ini` file.

1. Locate the extension’s `.ini` file (e.g., `memcached.ini`) in the directory:

   <div class="notranslate">

   ```
   /opt/alt/phpXY/etc/php.d.all/
   ```

   </div>

2. To enable the extension, copy the located `.ini` file to:

   <div class="notranslate">

   ```
   /opt/alt/phpXY/etc/php.d/
   ```

   </div>

   :::warning
   If the same extension is present in multiple `.ini` configuration files within the `/opt/alt/phpXY/etc/php.d/` directory, you may see warnings in PHP logs and possibly on your site.
   :::

#### Increase Upload/Memory Limits

If you need to increase memory and upload size limits:

1. Open the `default.ini` file in an editor of your choice.
2. Set the limits as needed, e.g:

   <div class="notranslate">

   ```text
   upload_max_filesize=40M
   post_max_size=40M
   memory_limit=256M
   ```

   </div>


## alt-python

The information will be added later.

## alt-ruby

The information will be added later.

## alt-nodejs

The information will be added later.


## alt-php/python/ruby/nodejs End Of Life

CloudLinux provides additional security support time of 
php, python, ruby and nodejs after the end of support from the vendor.
Below are tables with information about the time of security support from the vendor and from CloudLinux.

*EOL - end of life

*SST - security support time

### alt-php EOL

| Version | Released | EOL by vendor | SST by vendor (years) | EOL by CloudLinux | SST by Cloudlinux after vendor's EOL (years) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 4.4 | 07.11.2005 | 08.07.2008 | 2.7 | [01.07.2023](https://blog.cloudlinux.com/php-4.4-end-of-life-0) | 14.9 |
| 5.1 | 23.11.2005 | 24.08.2006 | 0.8 | [01.04.2024](https://blog.cloudlinux.com/php-5.1-end-of-life) | 17.6 |
| 5.2 | 01.11.2006 | 06.01.2011 | 4.2 | 
| 5.3 | 29.06.2009 | 14.08.2014 | 5.1 |
| 5.4 | 29.02.2012 | 14.09.2015 | 3.5 |
| 5.5 | 19.06.2013 | 21.07.2016	| 3.1 |
| 5.6 |	27.08.2014 | 31.12.2018	| 4.3 |
| 7.0 | 12.01.2015 | 10.01.2019	| 3.9 |
| 7.1 | 30.11.2016 | 01.12.2019	| 3.0 |
| 7.2 | 28.11.2017 | 30.11.2020	| 3.0 |
| 7.3 | 04.12.2018 | 06.12.2021	| 3.0 |
| 7.4 | 26.11.2019 | 28.11.2022	| 3.0 |
| 8.0 | 24.11.2020 | 26.11.2023	| 3.0 |
| 8.1 | 23.11.2021 | 25.11.2024	| 3.0 |
| 8.2 | 08.12.2022 | 08.12.2025	| 3.0 |


### alt-python EOL

| Version | Released | EOL by vendor | SST by vendor (years) | EOL by CloudLinux | SST by Cloudlinux after vendor's EOL (years) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2.7 |	29.09.2012 | 29.09.2017 | 5.0 |
| 3.3 | 29.09.2012 | 29.09.2017	| 5.0 |
| 3.4 | 15.03.2014 | 18.03.2019	| 5.0 |
| 3.5 | 12.09.2015 | 13.09.2020	| 5.0 |
| 3.6 | 22.12.2016 | 23.12.2021	| 5.0 |
| 3.7 | 26.06.2018 | 27.06.2023	| 5.0 |
| 3.8 | 14.10.2019 | 14.10.2024	| 5.0 |
| 3.9 | 05.10.2020 | 05.10.2025	| 5.0 |
| 3.10 | 05.04.2021	| 04.10.2026 | 5.4 |
| 3.11 | 24.10.2022 | 24.10.2027 | 5.0 |
| 3.12 | 02.10.2023	| 02.10.2028 | 5.0 |

### alt-ruby EOL

| Version | Released | EOL by vendor | SST by vendor (years) | EOL by CloudLinux | SST by Cloudlinux after vendor's EOL (years) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1.8 | 24.02.2013 | 24.02.2016 | 3.0 |
| 1.9 | 24.02.2013 | 24.02.2016 | 3.0 |
| 2.0 | 24.02.2013 | 24.02.2016 | 3.0 |
| 2.1 | 25.12.2013 | 31.03.2017 | 3.3 |
| 2.2 | 25.12.2014 | 31.03.2018	| 3.3 |
| 2.3 | 24.12.2015 | 31.03.2019	| 3.3 |
| 2.4 | 23.12.2016 | 31.03.2020	| 3.3 |
| 2.5 | 25.12.2017 | 31.03.2021	| 3.3 |
| 2.6 | 25.12.2018 | 31.03.2022	| 3.3 |
| 2.7 | 25.12.2019 | 31.03.2023	| 3.3 |
| 3.0 | 25.12.2020 | 31.03.2024	| 3.3 |
| 3.1 | 25.12.2021 | 31.03.2025	| 3.3 |
| 3.2 | 25.12.2022 | 31.03.2026	| 3.3 |

### alt-nodejs EOL

| Version | Released | EOL by vendor | SST by vendor (years) | EOL by CloudLinux | SST by Cloudlinux after vendor's EOL (years) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6	| 26.04.2016 | 30.04.2019 | 3.0 |
| 8	| 30.03.2017 | 31.12.2019 | 2.8 |
| 9	| 31.10.2017 | 30.06.2018 | 0.6 |
| 10 | 24.04.2018 | 30.04.2021 | 3.0 |
| 11 | 23.10.2018 | 30.06.2019 | 0.7 |
| 12 | 23.04.2019 | 30.04.2022 | 3.0 |
| 14 | 21.04.2020 | 30.04.2023 | 3.0 |
| 16 | 20.04.2021 | 11.09.2023 | 2.3 |
| 18 | 19.04.2022 | 30.04.2025 | 3.0 |
| 19 | 18.10.2022 | 01.06.2023 | 0.6 |
| 20 | 18.04.2023 | 30.04.2026 | 3.0 |
