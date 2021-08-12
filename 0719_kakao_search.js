
$(function (event){
    $('#searchBtn').on('click',function (event){
        let keyword = $('#search_keyword').val()

        $.ajax({
            async : true,
            url :'https://dapi.kakao.com/v2/search/image',
            type : 'GET',
            data : {
                query : keyword
            },
            headers : {
                'Authorization' : 'KakaoAK 개인키'
            },
            dataType : 'json',
            timeout : 3000,
            success : function (result){
                $('#myImg').attr('src',result.documents[0].thumbnail_url)
            },
            error : function (){
                alert('실패')
            }

        })
    })
})