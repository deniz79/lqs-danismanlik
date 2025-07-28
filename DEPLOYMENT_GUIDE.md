# 🚀 LQS Danışmanlık - GitHub & Alan Adı Birleştirme Rehberi

## 📋 Adım Adım Kurulum

### 1. GitHub Repository Oluşturma

1. **GitHub.com'a gidin** ve hesabınıza giriş yapın
2. **"New repository"** butonuna tıklayın
3. Repository adını girin: `lqs-danismanlik` veya `dnalqs-website`
4. **Public** seçin (GitHub Pages için gerekli)
5. **"Create repository"** butonuna tıklayın

### 2. Kodları GitHub'a Yükleme

```bash
# Mevcut remote'u kaldırın
git remote remove origin

# Yeni repository URL'ini ekleyin (YOUR_USERNAME yerine GitHub kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR_USERNAME/lqs-danismanlik.git

# Kodları GitHub'a gönderin
git push -u origin main
```

### 3. GitHub Pages Ayarları

1. **Repository sayfasında** "Settings" sekmesine gidin
2. **Sol menüden** "Pages" seçin
3. **Source** bölümünde:
   - Branch: `main` seçin
   - Folder: `/ (root)` seçin
4. **"Save"** butonuna tıklayın

### 4. Custom Domain Ayarları

1. **GitHub Pages ayarlarında** "Custom domain" bölümüne gidin
2. Domain adını girin: `dnalqs.com`
3. **"Save"** butonuna tıklayın
4. **"Enforce HTTPS"** kutusunu işaretleyin

### 5. DNS Ayarları (Alan Adı Sağlayıcınızda)

Alan adı sağlayıcınızın DNS ayarlarında şu kayıtları ekleyin:

#### A Kayıtları:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### CNAME Kaydı (www için):
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

### 6. CNAME Dosyası Oluşturma

Repository'nizde `CNAME` dosyası oluşturun:

```bash
echo "dnalqs.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

## 🌐 Alan Adı Sağlayıcıları İçin Özel Ayarlar

### Godaddy
1. DNS Management'e gidin
2. A kayıtlarını yukarıdaki IP'lerle ekleyin
3. CNAME kaydını ekleyin

### Namecheap
1. Domain List > Manage'e gidin
2. Advanced DNS'e gidin
3. A kayıtlarını ekleyin
4. CNAME kaydını ekleyin

### Google Domains
1. DNS sekmesine gidin
2. Custom records bölümünde kayıtları ekleyin

## ⏱️ Yayın Süresi

- **GitHub Pages**: 5-10 dakika
- **DNS Yayılımı**: 24-48 saat (genellikle 1-2 saat)

## 🔍 Test Etme

1. **GitHub Pages URL**: `https://YOUR_USERNAME.github.io/lqs-danismanlik`
2. **Custom Domain**: `https://dnalqs.com`

## 🛠️ Sorun Giderme

### DNS Yayılımını Kontrol Etme
```bash
# Terminal'de DNS kontrolü
nslookup dnalqs.com
dig dnalqs.com
```

### GitHub Pages Durumu
- Repository > Settings > Pages
- "Your site is published at..." mesajını görmelisiniz

### SSL Sertifikası
- GitHub otomatik olarak SSL sertifikası sağlar
- "Enforce HTTPS" seçeneğini aktif edin

## 📞 Destek

Sorun yaşarsanız:
1. GitHub Pages dokümantasyonu
2. Alan adı sağlayıcınızın destek ekibi
3. DNS yayılım süresini bekleyin

## 🎯 Sonuç

Bu adımları tamamladıktan sonra:
- ✅ `dnalqs.com` adresinden sitenize erişebileceksiniz
- ✅ `www.dnalqs.com` da çalışacak
- ✅ SSL sertifikası otomatik olarak aktif olacak
- ✅ Tüm cihazlardan erişilebilir olacak

---

**Not**: GitHub kullanıcı adınızı ve repository adınızı kendi bilgilerinizle değiştirmeyi unutmayın! 