// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    feather.replace();
    
    // Load product data from URL parameters
    loadProductData();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize product interactions
    initProductInteractions();
});

// Load product data from URL parameters
function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const productName = urlParams.get('name') || 'Product Name';
    const productPrice = urlParams.get('price') || '$0';
    const productDescription = urlParams.get('description') || 'Product description';
    const productImage = urlParams.get('image') || '';
    
    // Update page elements
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-price').textContent = productPrice;
    document.getElementById('product-description').textContent = productDescription;
    document.getElementById('product-image').src = productImage;
    document.getElementById('product-image').alt = productName;
    
    // Update page title
    document.title = `${productName} - Mobile Styles`;
    
    // Update specifications based on product
    updateSpecifications(productName);
}

// Update specifications based on product name
function updateSpecifications(productName) {
    const specsContainer = document.querySelector('.specs-list');
    let specs = [];
    
    // Default specs that work for most products
    if (productName.includes('iPhone')) {
        specs = [
            { label: 'Display:', value: '6.7" Super Retina XDR OLED' },
            { label: 'Chip:', value: 'A17 Pro Bionic' },
            { label: 'Storage:', value: '128GB / 256GB / 512GB / 1TB' },
            { label: 'Camera:', value: '48MP Main + 12MP Ultra Wide + 12MP Telephoto' },
            { label: 'Battery:', value: 'Up to 29 hours video playback' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 6E, Bluetooth 5.3' }
        ];
    } else if (productName.includes('Samsung')) {
        specs = [
            { label: 'Display:', value: '6.8" Dynamic AMOLED 2X' },
            { label: 'Processor:', value: 'Snapdragon 8 Gen 3' },
            { label: 'Storage:', value: '256GB / 512GB / 1TB' },
            { label: 'Camera:', value: '200MP Main + 50MP Periscope + 12MP Ultra Wide' },
            { label: 'Battery:', value: '5000mAh with 45W fast charging' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 7, Bluetooth 5.3' }
        ];
    } else if (productName.includes('Google')) {
        specs = [
            { label: 'Display:', value: '6.7" LTPO OLED 120Hz' },
            { label: 'Chip:', value: 'Google Tensor G3' },
            { label: 'Storage:', value: '128GB / 256GB / 512GB' },
            { label: 'Camera:', value: '50MP Main + 48MP Telephoto + 48MP Ultra Wide' },
            { label: 'Battery:', value: '5050mAh with 30W fast charging' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 6E, Bluetooth 5.3' }
        ];
    } else if (productName.includes('OnePlus')) {
        specs = [
            { label: 'Display:', value: '6.82" LTPO AMOLED 120Hz' },
            { label: 'Processor:', value: 'Snapdragon 8 Gen 3' },
            { label: 'Storage:', value: '256GB / 512GB' },
            { label: 'Camera:', value: '50MP Main + 64MP Periscope + 48MP Ultra Wide' },
            { label: 'Battery:', value: '5400mAh with 100W SuperVOOC' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 7, Bluetooth 5.4' }
        ];
    } else if (productName.includes('Xiaomi')) {
        specs = [
            { label: 'Display:', value: '6.73" LTPO AMOLED 120Hz' },
            { label: 'Processor:', value: 'Snapdragon 8 Gen 3' },
            { label: 'Storage:', value: '256GB / 512GB / 1TB' },
            { label: 'Camera:', value: '50MP Main + 50MP Periscope + 50MP Ultra Wide' },
            { label: 'Battery:', value: '5300mAh with 90W fast charging' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 7, Bluetooth 5.4' }
        ];
    } else if (productName.includes('Nothing')) {
        specs = [
            { label: 'Display:', value: '6.7" LTPO AMOLED 120Hz' },
            { label: 'Processor:', value: 'Dimensity 7200 Pro' },
            { label: 'Storage:', value: '128GB / 256GB' },
            { label: 'Camera:', value: '50MP Main + 50MP Ultra Wide' },
            { label: 'Battery:', value: '5000mAh with 45W fast charging' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 6, Bluetooth 5.3' }
        ];
    } else if (productName.includes('Motorola')) {
        specs = [
            { label: 'Display:', value: '6.7" pOLED 144Hz' },
            { label: 'Processor:', value: 'Snapdragon 7 Gen 3' },
            { label: 'Storage:', value: '256GB / 512GB' },
            { label: 'Camera:', value: '50MP Main + 13MP Ultra Wide + 10MP Telephoto' },
            { label: 'Battery:', value: '4400mAh with 125W TurboPower' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 6E, Bluetooth 5.4' }
        ];
    } else if (productName.includes('Sony')) {
        specs = [
            { label: 'Display:', value: '6.5" 4K OLED 120Hz' },
            { label: 'Processor:', value: 'Snapdragon 8 Gen 3' },
            { label: 'Storage:', value: '256GB / 512GB' },
            { label: 'Camera:', value: '48MP Main + 12MP Telephoto + 12MP Ultra Wide' },
            { label: 'Battery:', value: '5000mAh with 30W fast charging' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 6E, Bluetooth 5.3' }
        ];
    } else {
        // Default specs
        specs = [
            { label: 'Display:', value: '6.7" AMOLED 120Hz' },
            { label: 'Processor:', value: 'Premium Flagship Chipset' },
            { label: 'Storage:', value: '128GB / 256GB / 512GB' },
            { label: 'Camera:', value: 'Advanced Camera System' },
            { label: 'Battery:', value: 'All-day battery with fast charging' },
            { label: 'Connectivity:', value: '5G, Wi-Fi 6, Bluetooth 5.3' }
        ];
    }
    
    // Clear existing specs and add new ones
    specsContainer.innerHTML = '';
    specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${spec.label}</span>
            <span class="spec-value">${spec.value}</span>
        `;
        specsContainer.appendChild(specItem);
    });
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Product interactions
function initProductInteractions() {
    const buyNowBtn = document.getElementById('buy-now-btn');
    
    // Buy now button
    buyNowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = document.getElementById('product-name').textContent;
        showAlert(`Redirecting to store for ${productName}...`, 'success');
        
        // Simulate redirect to store
        setTimeout(() => {
            window.open('https://www.apple.com/store', '_blank');
        }, 1500);
    });
}

// Alert function
function showAlert(message, type = 'success') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-message">${message}</span>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">
                <i data-feather="x"></i>
            </button>
        </div>
    `;
    
    // Add styles
    alert.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(48, 209, 88, 0.1)' : 'rgba(255, 59, 48, 0.1)'};
        border: 1px solid ${type === 'success' ? 'rgba(48, 209, 88, 0.3)' : 'rgba(255, 59, 48, 0.3)'};
        color: ${type === 'success' ? '#30D158' : '#FF3B30'};
        padding: 1rem 1.5rem;
        border-radius: 12px;
        backdrop-filter: blur(20px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    alert.querySelector('.alert-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    alert.querySelector('.alert-close').style.cssText = `
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        transition: opacity 0.2s ease;
    `;
    
    document.body.appendChild(alert);
    feather.replace();
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Add CSS for alert animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .alert-close:hover {
        opacity: 1 !important;
        background: rgba(255, 255, 255, 0.1) !important;
    }
`;
document.head.appendChild(style);