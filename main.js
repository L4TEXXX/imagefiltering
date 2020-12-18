//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
// require turbolinks
//= require_tree .
/* global $ */
let keyWord = document.getElementsByClassName("img-box");
keyWord = Array.from(keyWord);


function searchFilter(){
    let searchResults = [];
    let searchText = $(this).val();
    let hideResult = [];
    
    
    if(searchText != ""){
        $('.keyword-text').each(function(index,keyWord){
            if(keyWord.textContent.indexOf(searchText) != -1){
                searchResults.push(keyWord.textContent);
                $(this).parent('.img-box').removeClass('add-hidden');
            }else{
                hideResult.push(keyWord.textContent);
                $(this).parent('.img-box').addClass('add-hidden');
            }
        });
      }
        
    }
    
//イベント発火
$('#filter-box').on('input',searchFilter);


