client.hmset('codigm', {
    'goormIDE' : 'cloud service',
    'goormEDU' : 'edu service'
}, redis.print);

client.hset('Hash Key', 'HashTest 1', '1', redis.print);
client.hset(['Hash Key', 'HashTest 2', '2'], redis.print);             // 해시 테이블 추가 및 결과 출력

client.hget('codigm', 'goormIDE', function(err,value) {            // codigm의 해시테이블에서 goormIDE 값 가져오기
    if(err) throw err;
    console.log('goormIDE is : ' + value);            // 해당 값 출력
});

client.hkeys('codigm', function(err,keys) {            // camping의 해시테이블 모든 키 데이터 가져오기
    if(err) throw err;
    keys.forEach(function(key, i) {
        console.log('codigm ' + i + ' : ' + key );
    });
});
//예시
